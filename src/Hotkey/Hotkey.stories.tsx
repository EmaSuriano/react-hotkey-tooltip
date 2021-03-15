import React from 'react';
import { Button, Switch, Typography } from '@material-ui/core';
import { Hotkey } from '..';
import { withNotes } from '../utils/storybook';

export default {
  title: 'Core/Hotkey',
  parameters: {
    info: {
      propTables: [Hotkey],
    },
  },
};

export const NoHotkeyProvider = withNotes(
  () => (
    <>
      <Hotkey onPress="focus" combination="z">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          autoFocus
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
    <>
      <Hotkey onPress="focus" combination="z" disabled>
        <Button variant="contained" autoFocus color="primary">
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
    </>
  ),
  'Disable Hotkey and tooltip for the shortcut `z`. The other combinations should work as expected. Press `shift+h` too show the Tooltips.',
);

export const SpecialCallback = withNotes(() => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Hotkey onPress={() => setChecked((tgl) => !tgl)} combination="z">
      <Switch checked={checked} autoFocus />
    </Hotkey>
  );
}, 'Example with a special handler for `onPress` - Change the Switch state by pressing Z. Press `shift+h` too show the Tooltips.');
