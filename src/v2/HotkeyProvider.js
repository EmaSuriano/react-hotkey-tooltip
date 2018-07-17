import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './HotkeyContext';
import MouseTrap from 'mousetrap';

export class HotkeyProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    tooltipCombination: PropTypes.string.isRequired,
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

  // static getDerivedStateFromProps(props, state) {
  //   const { tooltipCombination } = props;
  //   if (tooltipCombination !== state.combination) {

  //   }
  // }

  state = {
    showTooltip: false,
    combination: this.props.tooltipCombination,
  };

  changeTooltipVisibility = on => () => {
    console.log('changing visibility', on);
    this.setState({ showTooltip: on });
  };

  render() {
    const { children } = this.props;
    const { showTooltip } = this.state;

    const value = {
      showTooltip,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

export default HotkeyProvider;
