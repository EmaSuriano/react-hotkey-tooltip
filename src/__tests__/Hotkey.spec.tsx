import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { HotkeyProvider, Hotkey } from '..';
import { Button } from '@material-ui/core';

describe('Hotkey', () => {
  it('should be able to focus buttons', () => {
    render(
      <HotkeyProvider>
        <Hotkey onPress="focus" combination="z">
          <Button>Press Z to focus me!</Button>
        </Hotkey>
        <Hotkey onPress="focus" combination="x">
          <Button>Press X to focus me!</Button>
        </Hotkey>
      </HotkeyProvider>,
    );

    const body = document.activeElement;

    fireEvent.keyPress(body, { key: 'Z', code: 'KeyZ' });
    waitFor(() => {
      expect(screen.getByText('Press Z to focus me!')).toEqual(
        document.activeElement,
      );
    });

    fireEvent.keyPress(body, { key: 'X', code: 'KeyX' });
    waitFor(() => {
      expect(screen.getByText('Press X to focus me!')).toEqual(
        document.activeElement,
      );
    });
  });

  it('should be able to show tooltip', () => {
    render(
      <HotkeyProvider>
        <Hotkey onPress="focus" combination="z">
          <Button>Press Z to focus me!</Button>
        </Hotkey>
        <Hotkey onPress="focus" combination="x">
          <Button>Press X to focus me!</Button>
        </Hotkey>
      </HotkeyProvider>,
    );

    const body = document.activeElement;

    fireEvent.keyDown(body, { key: 'H', code: 'KeyH', shiftKey: true });
    waitFor(() => {
      expect(screen.getByText('shift + h')).toBeInTheDocument();
    });
  });
});
