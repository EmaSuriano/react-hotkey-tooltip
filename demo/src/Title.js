import React from 'react';
import HotkeyWrapper from 'lib';

const Title = () => {
  return (
    <header>
      <HotkeyWrapper
        hotkey="r+h+t"
        onHotkeyPressed={() =>
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }
        tooltipHotkey="h"
        tooltipProps={{
          theme: 'light',
          size: 'big',
          arrow: true,
        }}
      >
        <h1>React Hotkey Tooltip</h1>
      </HotkeyWrapper>
      <h2>A global Hotkey provider with built-in tooltip for React</h2>
    </header>
  );
};

export default Title;
