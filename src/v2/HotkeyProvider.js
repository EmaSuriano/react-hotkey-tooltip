import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './HotkeyContext';
import MouseTrap from 'mousetrap';

export class HotkeyProvider extends Component {
  static propTypes = {
    /**
     * Description of prop "foo".
     */
    children: PropTypes.node.isRequired,
    /**
     * Key combination to trigger the tooltips
     */
    tooltipCombination: PropTypes.string,
    /**
     * Options passed to react-tippy
     */
    tooltipOptions: PropTypes.object,
    /**
     * Disabled all Hotkeys
     */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    tooltipOptions: {},
    tooltipCombination: 'shift+h',
  };

  constructor(props) {
    super(props);
    const { tooltipCombination } = props;
    MouseTrap.bind(
      tooltipCombination,
      this.changeTooltipVisibility(true),
      'keydown',
    );
    MouseTrap.bind(
      tooltipCombination,
      this.changeTooltipVisibility(false),
      'keyup',
    );
  }

  state = {
    showTooltip: false,
    combination: this.props.tooltipCombination,
    hotkeys: [this.props.tooltipCombination],
  };

  changeTooltipVisibility = on => () =>
    on !== this.state.showTooltip && this.setState({ showTooltip: on });

  render() {
    const { children, disabled } = this.props;
    const value = {
      showTooltip: this.state.showTooltip && !disabled,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export default HotkeyProvider;
