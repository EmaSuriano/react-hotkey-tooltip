import React from 'react';
import { Hotkey, HotkeyProvider } from '.';

export default {
  title: 'HotkeyProvider',

  parameters: {
    component: HotkeyProvider,
  },
};

export const Default = () => (
  <HotkeyProvider>
    <Hotkey onPress="focus" combination="a">
      <button>Focus me!</button>
    </Hotkey>
    <Hotkey onPress="focus" combination="b">
      <button>Focus me!</button>
    </Hotkey>
    <Hotkey onPress="focus" combination="c">
      <button>Focus me!</button>
    </Hotkey>
  </HotkeyProvider>
);

export const AllHotkeysDisabled = () => (
  <HotkeyProvider disabled>
    <Hotkey onPress="focus" combination="a">
      <button>Focus me!</button>
    </Hotkey>
    <Hotkey onPress="focus" combination="b">
      <button>Focus me!</button>
    </Hotkey>
  </HotkeyProvider>
);

export const ChangeTooltipCombination = () => (
  <HotkeyProvider tooltipCombination="shift+ctrl+h">
    <Hotkey onPress="focus" combination="a">
      <button>Focus me!</button>
    </Hotkey>
    <Hotkey onPress="focus" combination="b">
      <button>Focus me!</button>
    </Hotkey>
    <Hotkey onPress="focus" combination="c">
      <button>Focus me!</button>
    </Hotkey>
  </HotkeyProvider>
);

export const ThemingTooltip = () => (
  <HotkeyProvider
    tooltipOptions={{
      arrow: false,
      animation: 'scale',
    }}
  >
    <Hotkey onPress="focus" combination="a">
      <button>Special tooltip!</button>
    </Hotkey>
  </HotkeyProvider>
);
