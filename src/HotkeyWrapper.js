import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import { Tooltip } from 'react-tippy';
import { bind, unbind } from 'mousetrap';
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
      arrow: true,
    },
    disableTooltip: false,
  };

  state = {
    showTooltip: false,
  };

  componentDidMount() {
    if (!this.props.disableTooltip) {
      addNewTooltipHelp(this.props.tooltipHotkey, this.setShowTooltip);
    }

    bind(this.props.hotkey, this.props.onHotkeyPressed);
  }

  componentWillUnmount() {
    if (!this.props.disableTooltip) {
      removeToolTipHelp(this.props.tooltipHotkey, this.setShowTooltip);
    }

    unbind(this.props.hotkey);
  }

  setShowTooltip = showTooltip =>
    this.state.showTooltip !== showTooltip && this.setState({ showTooltip });

  render() {
    const { children, hotkey, tooltipProps, disableTooltip } = this.props;
    const { showTooltip } = this.state;

    return disableTooltip ? (
      children
    ) : (
      <Tooltip
        title={hotkey.toUpperCase()}
        open={showTooltip}
        trigger="manual"
        multiple
        {...tooltipProps}
      >
        {children}
      </Tooltip>
    );
  }
}

export default HotkeyWrapper;
