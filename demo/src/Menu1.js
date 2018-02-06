import HotkeyWrapper from '../../src';
import React, { Component } from 'react';
import ComplexButton from './components/ComplexButton';
import HighlightableText from './components/HighlightableText';

export default class Menu1 extends Component {
  render() {
    return (
      <div className="Home">
        <HotkeyWrapper hotkey="a" onHotkeyPressed={() => this.button1.focus()} disableTooltip>
          <button onClick={() => console.log('click button1')} ref={c => (this.button1 = c)}>
            Button 1
          </button>
        </HotkeyWrapper>

        <ComplexButton onClick={() => console.log('Clicking complex button')} />
        <HighlightableText />

        <HotkeyWrapper hotkey="b" onHotkeyPressed="focus">
          <button onClick={() => console.log('click button 2')}>Button 2</button>
        </HotkeyWrapper>
        
        <HotkeyWrapper hotkey="i" onHotkeyPressed="focus">
          <input type="text" />
        </HotkeyWrapper>
      </div>
    );
  }
}
