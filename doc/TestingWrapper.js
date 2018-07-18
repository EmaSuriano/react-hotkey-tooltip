import React from 'react';
import { Hotkey, HotkeyProvider } from '../src/v2';

const Demo = () => {
  return (
    <div>
      <HotkeyProvider tooltipCombination="shift+h">
        <Hotkey combination="a" onPress="click">
          <button onClick={() => alert('Button clicked!')}>Ok!</button>
        </Hotkey>
      </HotkeyProvider>
    </div>
  );
};

export default Demo;
