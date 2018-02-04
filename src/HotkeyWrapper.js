import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import ReactDOM from 'react-dom';
import { Tooltip } from 'react-tippy';
import MouseTrap from 'mousetrap';
import { addNewTooltipHelp, removeToolTipHelp } from './helpTooltipHandler';
import 'react-tippy/dist/tippy.css';

class HotkeyWrapper extends Component {
  static propTypes = {
    shortcut: PropTypes.string.isRequired,
    onShortcutPressed: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
      .isRequired,
    children: PropTypes.element.isRequired,
    tooltipHotkey: PropTypes.string,
    tooltipProps: PropTypes.object,
    disableTooltip: PropTypes.bool,
  };

  static defaultProps = {
    tooltipHotkey: '?',
    tooltipProps: {
      arrow: true,
    },
  };

  state = {
    showTooltip: false,
  };

  componentDidMount() {
    if (!this.props.disableTooltip)
      addNewTooltipHelp(this.props.tooltipHotkey, this.setShowTooltip);

    MouseTrap.bind(this.props.shortcut, this.onShortcutPressed);
  }

  componentWillUnmount() {
    if (!this.props.disableTooltip)
      removeToolTipHelp(this.props.tooltipHotkey, this.setShowTooltip);

    MouseTrap.unbind(this.props.shortcut);
  }

  onShortcutPressed = event => {
    try {
      if (typeof this.props.onShortcutPressed === 'function')
        return this.props.onShortcutPressed(event);

      if (this.props.onShortcutPressed === 'focus') {
        const isFocus =
          document.activeElement === ReactDOM.findDOMNode(this.component);
        if (!isFocus) event.preventDefault();
      }

      return this.component[this.props.onShortcutPressed](event);
    } catch (err) {
      console.error('onShortcutPressed does not exist', err);
    }
  };

  setShowTooltip = showTooltip =>
    this.state.showTooltip !== showTooltip && this.setState({ showTooltip });

  render() {
    const children =
      typeof this.props.onShortcutPressed === 'function'
        ? this.props.children
        : React.cloneElement(this.props.children, {
            ref: node => (this.component = node),
          });

    return (
      <Tooltip
        title={this.props.shortcut.toUpperCase()}
        position="bottom"
        trigger="manual"
        open={this.state.showTooltip}
        multiple
        {...this.props.tooltipProps}
      >
        {children}
      </Tooltip>
    );
  }
}

export default HotkeyWrapper;
