import React from 'react';
import { Hotkey, HotkeyProvider } from '.';
import { withNotes } from './storybook';
import { Button, Switch, Typography } from '@material-ui/core';

export default {
  title: 'Hotkey',
  parameters: {
    info: {
      propTables: [Hotkey],
    },
  },
};

export const Default = withNotes(
  () => (
    <HotkeyProvider>
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
        <Button variant="contained" color="primary">
          Press X to focus me!
        </Button>
      </Hotkey>
    </HotkeyProvider>
  ),
  'Basic example to play with events between two Button. Press `shift+h` too show the Tooltips.',
);

export const WithNoHotkeyProvider = withNotes(
  () => (
    <>
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
        <Button variant="contained" color="primary">
          Press X to focus me!
        </Button>
      </Hotkey>
    </>
  ),
  'Example without the HotkeyProvider, no Tooltips are visible but Hotkeys still work!',
);

export const Disabled = withNotes(
  () => (
    <HotkeyProvider>
      <Hotkey onPress="focus" combination="z" disabled>
        <Button variant="contained" color="primary">
          Press Z to focus me!
        </Button>
      </Hotkey>
      <Typography variant="caption" style={{ margin: '0 10px' }}>
        ⬅️ This hotkey is disabled ...
      </Typography>
      <Hotkey onPress="focus" combination="x">
        <Button variant="contained" color="primary">
          Press X to focus me!
        </Button>
      </Hotkey>
    </HotkeyProvider>
  ),
  'Disable Hotkey and tooltip for the shortcut `z`. The other combinations should work as expected. Press `shift+h` too show the Tooltips.',
);

export const SpecialCallback = withNotes(() => {
  const [checked, setChecked] = React.useState(false);
  return (
    <HotkeyProvider>
      <Hotkey onPress={() => setChecked((tgl) => !tgl)} combination="z">
        <Switch checked={checked} />
      </Hotkey>
      <Typography variant="subtitle1">
        Change the Switch state by pressing Z
      </Typography>
    </HotkeyProvider>
  );
}, 'Example with a special handler for `onPress`. Press `shift+h` too show the Tooltips.');
