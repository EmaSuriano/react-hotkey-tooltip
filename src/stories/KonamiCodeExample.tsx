import { useState } from 'react';
import { HotkeyProvider } from '../HotkeyProvider';
import { Snackbar, Typography } from '@material-ui/core';
import { Hotkey } from '../Hotkey';

export const KonamiCodeExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HotkeyProvider>
      <Typography style={{ textAlign: 'center', marginBottom: '10px' }}>
        Try typing the Konami code:
      </Typography>
      <Hotkey
        combination="up up down down left right left right b a"
        onPress={() => setIsOpen(true)}
      >
        <Typography variant="h4">⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️</Typography>
      </Hotkey>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
        message="Code activated!"
      />
    </HotkeyProvider>
  );
};
