import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import ReactDOM from 'react-dom';
import { Tooltip } from 'react-tippy';
import MouseTrap from 'mousetrap';
import { addNewTooltipHelp, removeToolTipHelp } from './helpTooltipHandler';
import 'react-tippy/dist/tippy.css';

class HotkeyWrapper extends Component {
  static propTypes = {
    hotkey: PropTypes.string.isRequired,
    onHotkeyPressed: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
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
      position: 'bottom',
    },
    disableTooltip: false,
  };

  state = {
    showTooltip: false,
  };

  componentDidMount() {
    if (!this.props.disableTooltip)
      addNewTooltipHelp(this.props.tooltipHotkey, this.setShowTooltip);

    MouseTrap.bind(this.props.hotkey, this.onHotkeyPressed);
  }

  componentWillUnmount() {
    if (!this.props.disableTooltip)
      removeToolTipHelp(this.props.tooltipHotkey, this.setShowTooltip);

    MouseTrap.unbind(this.props.hotkey);
  }

  onHotkeyPressed = event => {
    try {
      if (typeof this.props.onHotkeyPressed === 'function')
        return this.props.onHotkeyPressed(event);

      if (this.props.onHotkeyPressed === 'focus') {
        const isFocus =
          document.activeElement === ReactDOM.findDOMNode(this.component);
        if (!isFocus) event.preventDefault();
      }

      return this.component[this.props.onHotkeyPressed](event);
    } catch (err) {
      console.error('onHotkeyPressed does not exist', err);
    }
  };

  setShowTooltip = showTooltip =>
    this.state.showTooltip !== showTooltip && this.setState({ showTooltip });

  render() {
    const children =
      typeof this.props.onHotkeyPressed === 'function'
        ? this.props.children
        : React.cloneElement(this.props.children, {
            ref: node => (this.component = node),
          });

    return this.props.disableTooltip ? (
      children
    ) : (
      <Tooltip
        title={this.props.hotkey.toUpperCase()}
        open={this.state.showTooltip}
        trigger="manual"
        multiple
        {...this.props.tooltipProps}
      >
        {children}
      </Tooltip>
    );
  }
}

export default HotkeyWrapper;
