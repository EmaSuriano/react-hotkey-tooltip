import React from 'react';
import { Hotkey, HotkeyProvider } from '../src/v2';

const TestingWrapper = () => {
  return (
    <HotkeyProvider>
      <Hotkey combination="a" onPress="click" disabled>
        <button onClick={alert}>Ok!</button>
      </Hotkey>
      <Hotkey combination="b" onPress="focus">
        <button onClick={() => alert('1')}>Ok!</button>
      </Hotkey>
      <Hotkey combination="c" onPress={alert}>
        <button onClick={alert}>Ok!</button>
      </Hotkey>
    </HotkeyProvider>
  );
};

export default TestingWrapper;
