import React, { Component } from 'react';
import HotkeyWrapper from '../../../src';

export default class ComplexButton extends Component {
  render() {
    return (
      <HotkeyWrapper
        hotkey="s"
        onHotkeyPressed={() => this.button.focus()}
        tooltipProps={{
          arrow: false,
          theme: 'light',
        }}
      >
        <span>
          <p>Complex Button</p>
          <button onClick={this.props.onClick} ref={c => (this.button = c)}>
            Click me!
          </button>
        </span>
      </HotkeyWrapper>
    );
  }
}
