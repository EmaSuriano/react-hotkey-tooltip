import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MouseTrap from 'mousetrap';
import { Provider } from './HotkeyContext';
import { KEYBOARD_EVENT } from './utils';

class HotkeyProvider extends Component {
  static propTypes = {
    /** Your React components */
    children: PropTypes.node.isRequired,
    /** Key combination to trigger the tooltips */
    tooltipCombination: PropTypes.string,
    /** Options passed to react-tippy */
    tooltipOptions: PropTypes.object,
    /** Disabled all Hotkeys */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    tooltipOptions: {},
    tooltipCombination: 'shift+h',
  };

  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
    };
    this.addTooltipHotkey(props.tooltipCombination);
  }

  componentWillReceiveProps(nextProps) {
    const { tooltipCombination } = this.props;
    if (nextProps.tooltipCombination !== tooltipCombination) {
      this.removeTooltipHotkey(tooltipCombination);
      this.addTooltipHotkey(nextProps.tooltipCombination);
    }
  }

  componentWillUnmount() {
    const { tooltipCombination } = this.props;
    this.removeTooltipHotkey(tooltipCombination);
  }

  addTooltipHotkey = combination => {
    MouseTrap.bind(
      combination,
      this.changeTooltipVisibility(true),
      KEYBOARD_EVENT.KEY_DOWN,
    );
    MouseTrap.bind(
      combination,
      this.changeTooltipVisibility(false),
      KEYBOARD_EVENT.KEY_UP,
    );
  };

  removeTooltipHotkey = combination => {
    MouseTrap.unbind(combination, KEYBOARD_EVENT.KEY_DOWN);
    MouseTrap.unbind(combination, KEYBOARD_EVENT.KEY_UP);
  };

  changeTooltipVisibility = on => () => {
    const { showTooltip } = this.state;
    const { disabled } = this.props;
    if (on === showTooltip || disabled) return;
    this.setState({ showTooltip: on });
  };

  render() {
    const { children, disabled, tooltipOptions } = this.props;
    const { showTooltip } = this.state;

    const value = {
      showTooltip: showTooltip && !disabled,
      disabled,
      tooltipOptions,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export default HotkeyProvider;
