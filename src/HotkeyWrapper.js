import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const {
      disableTooltip,
      hotkey,
      onHotkeyPressed,
      tooltipHotkey,
    } = this.props;

    if (!disableTooltip) {
      addNewTooltipHelp(tooltipHotkey, this.setShowTooltip);
    }

    bind(hotkey, onHotkeyPressed);
  }

  componentWillReceiveProps(nextProps) {
    const {
      disableTooltip,
      hotkey,
      onHotkeyPressed,
      tooltipHotkey,
    } = this.props;

    if (nextProps.disableTooltip !== disableTooltip) {
      if (nextProps.disableTooltip) {
        removeToolTipHelp(nextProps.tooltipHotkey, this.setShowTooltip);
      } else {
        addNewTooltipHelp(nextProps.tooltipHotkey, this.setShowTooltip);
      }
    }

    if (
      !nextProps.disableTooltip &&
      nextProps.tooltipHotkey !== tooltipHotkey
    ) {
      removeToolTipHelp(tooltipHotkey, this.setShowTooltip);
      addNewTooltipHelp(nextProps.tooltipHotkey, this.setShowTooltip);
    }

    if (nextProps.hotkey !== hotkey) {
      unbind(hotkey);
      bind(nextProps.hotkey, onHotkeyPressed);
    }
  }

  componentWillUnmount() {
    const { disableTooltip, hotkey, tooltipHotkey } = this.props;

    if (!disableTooltip) {
      removeToolTipHelp(tooltipHotkey, this.setShowTooltip);
    }

    unbind(hotkey);
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
