import React from 'react';
import { Hotkey, HotkeyProvider } from '../../../src/v2';

const Demo = () => (
  <div>
    <HotkeyProvider tooltipCombination="shift+h">
      <Hotkey combination="a" onPress={() => console.log('asdasd')}>
        <p>aslkdjalksd</p>
      </Hotkey>
    </HotkeyProvider>
    <p>new demo 1</p>
  </div>
  );

export default Demo;
