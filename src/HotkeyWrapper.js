import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import { Tooltip } from 'react-tippy';
import MouseTrap from 'mousetrap';
import { addNewTooltipHelp, removeToolTipHelp } from './helpTooltipHandler';

class HotkeyWrapper extends Component {
  static propTypes = {
    hotkey: PropTypes.string.isRequired,
    onHotkeyPressed: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    tooltipHotkey: PropTypes.string,
    tooltipProps: PropTypes.object,
    disableTooltip: PropTypes.bool,
  };

  static defaultProps = {
    tooltipHotkey: '?',
    tooltipProps: {
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

    MouseTrap.bind(this.props.hotkey, this.props.onHotkeyPressed);
  }

  componentWillUnmount() {
    if (!this.props.disableTooltip)
      removeToolTipHelp(this.props.tooltipHotkey, this.setShowTooltip);

    MouseTrap.unbind(this.props.hotkey);
  }

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
