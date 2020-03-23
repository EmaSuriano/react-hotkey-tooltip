import React from 'react';
import { Hotkey, HotkeyProvider } from '.';
import 'tippy.js/dist/tippy.css';

export default {
  title: 'Hotkey',

  parameters: {
    component: Hotkey,
  },
};

export const Default = () => (
  <div>
    <HotkeyProvider>
      <Hotkey onPress="focus" combination="a">
        <button>Press A to focus me!</button>
      </Hotkey>
      <Hotkey onPress="focus" combination="b">
        <button>Press B to focus me!</button>
      </Hotkey>
    </HotkeyProvider>
  </div>
);

export const Disabled = () => (
  <div>
    <HotkeyProvider>
      <Hotkey onPress="focus" combination="a" disabled>
        <button>Press A to focus me!</button>
      </Hotkey>
      <span>⬅️ This hotkey is disabled ...</span>
      <Hotkey onPress="focus" combination="b">
        <button>Press B to focus me!</button>
      </Hotkey>
    </HotkeyProvider>
  </div>
);

export const SpecialCallback = () => {
  const [toggle, setToggle] = React.useState(false);
  console.log(toggle);
  return (
    <HotkeyProvider>
      <Hotkey
        onPress={() => {
          console.log(toggle);
          setToggle(!toggle);
        }}
        combination="a"
      >
        <div style={{ color: toggle ? 'green' : 'red' }}>Toggle</div>
      </Hotkey>
      <p>Change the Toggle by pressing A</p>
    </HotkeyProvider>
  );
};
