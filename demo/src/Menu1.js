import HotkeyWrapper from '../../src';
import React, { Component } from 'react';
import ComplexButton from './components/ComplexButton';
import HighlightableText from './components/HighlightableText';

export default class Menu1 extends Component {
  render() {
    return (
      <div className="home">
        <HotkeyWrapper
          hotkey="a"
          onHotkeyPressed={() => this.button1.focus()}
          disableTooltip
        >
          <button
            onClick={() => console.log('click button1')}
            ref={c => (this.button1 = c)}
          >
            Button 1
          </button>
        </HotkeyWrapper>

        <HotkeyWrapper hotkey="b" onHotkeyPressed={() => this.button2.click()}>
          <button
            onClick={() => console.log('click button 2')}
            ref={p => (this.button2 = p)}
          >
            Button 2
          </button>
        </HotkeyWrapper>

        <HotkeyWrapper hotkey="i" onHotkeyPressed={() => this.input.focus()}>
          <input type="text" ref={x => (this.input = x)} />
        </HotkeyWrapper>
      </div>
    );
  }
}
