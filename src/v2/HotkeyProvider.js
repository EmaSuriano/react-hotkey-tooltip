import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './HotkeyContext';
import MouseTrap from 'mousetrap';
import HotkeyRegister from './HotkeyRegister';
import { KEYBOARD_EVENT } from './utils';

export class HotkeyProvider extends Component {
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
    this.addTooltipHotkey(props.tooltipCombination);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tooltipCombination !== this.props.tooltipCombination) {
      this.removeTooltipHotkey(this.props.tooltipCombination);
      this.addTooltipHotkey(nextProps.tooltipCombination);
    }
  }

  componentWillUnmount() {
    this.removeTooltipHotkey(this.props.tooltipCombination);
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

  state = {
    showTooltip: false,
    combination: this.props.tooltipCombination,
  };

  changeTooltipVisibility = on => () => {
    if (on === this.state.showTooltip || this.props.disabled) return;
    this.setState({ showTooltip: on });
  };

  render() {
    const { children, disabled, tooltipOptions } = this.props;
    const value = {
      showTooltip: this.state.showTooltip && !disabled,
      disabled,
      tooltipOptions,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export default HotkeyProvider;
