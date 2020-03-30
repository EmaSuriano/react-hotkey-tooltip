import React from 'react';
import { Hotkey, HotkeyProvider } from '..';
import { Button } from '@material-ui/core';
import { withNotes } from '../utils/storybook';

export default {
  title: 'Core/HotkeyProvider',
  parameters: {
    info: {
      propTables: [HotkeyProvider],
    },
  },
};

export const Default = withNotes(
  () => (
    <HotkeyProvider>
      <Hotkey onPress="focus" combination="z">
        <Button
          variant="contained"
          color="default"
          style={{ marginRight: '10px' }}
        >
          Press Z to focus me!
        </Button>
      </Hotkey>
      <Hotkey onPress="focus" combination="x">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          Press X to focus me!
        </Button>
      </Hotkey>
      <Hotkey onPress="focus" combination="c">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: '10px' }}
        >
          Press C to focus me!
        </Button>
      </Hotkey>
    </HotkeyProvider>
  ),
  'Basic example with 3 different Hotkeys. Press `shift+h` to show the Tooltips.',
);

export const AllHotkeysDisabled = withNotes(
  () => (
    <HotkeyProvider disabled>
      <Hotkey onPress="focus" combination="z">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          Press Z to focus me!
        </Button>
      </Hotkey>
      <Hotkey onPress="focus" combination="x">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: '10px' }}
        >
          Press X to focus me!
        </Button>
      </Hotkey>
    </HotkeyProvider>
  ),
  'Example with all the Hotkeys disabled. No Tooltip will be visible.',
);

export const ChangeTooltipCombination = withNotes(
  () => (
    <HotkeyProvider tooltipCombination="shift+ctrl+h">
      <Hotkey onPress="focus" combination="z">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          Press Z to focus me!
        </Button>
      </Hotkey>
      <Hotkey onPress="focus" combination="x">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: '10px' }}
        >
          Press X to focus me!
        </Button>
      </Hotkey>
    </HotkeyProvider>
  ),
  'Changing the combination to show the help. Press `shift+ctrl+h` to show the Tooltips.',
);

export const ThemingTooltip = withNotes(
  () => (
    <HotkeyProvider
      tooltipOptions={{
        arrow: false,
        animation: 'scale',
      }}
    >
      <Hotkey onPress="focus" combination="z">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          Press Z to focus me!
        </Button>
      </Hotkey>
      <Hotkey onPress="focus" combination="x">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: '10px' }}
        >
          Press X to focus me!
        </Button>
      </Hotkey>
    </HotkeyProvider>
  ),
  'Example of changing the tooltip display options. Press `shift+h` to show the Tooltips.',
);
