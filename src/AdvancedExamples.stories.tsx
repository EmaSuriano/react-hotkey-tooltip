import React, { FormEvent } from 'react';
import { Hotkey, HotkeyProvider } from '.';
import { withNotes } from './storybook';
import {
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

export default {
  title: 'Advanced Examples',
  parameters: {
    info: {
      text: 'Real examples of using this library',
      propTables: [Hotkey, HotkeyProvider],
    },
  },
};

export const ControlledRadioButton = withNotes(() => {
  const [selectedRadio, setSelectedRadio] = React.useState('1');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Selected Radio: ${selectedRadio}`);
  };

  const onChangeRadio = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setSelectedRadio(value);

  return (
    <HotkeyProvider
      tooltipOptions={{
        placement: 'left',
      }}
    >
      <form onSubmit={onSubmit}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={selectedRadio}
            onChange={onChangeRadio}
          >
            <Hotkey combination="1" onPress="click">
              <FormControlLabel value="1" control={<Radio />} label="Female" />
            </Hotkey>
            <Hotkey combination="2" onPress="click">
              <FormControlLabel value="2" control={<Radio />} label="Male" />
            </Hotkey>
            <Hotkey combination="3" onPress="click">
              <FormControlLabel value="3" control={<Radio />} label="Other" />
            </Hotkey>
          </RadioGroup>
          <Hotkey combination="space" onPress="click">
            <Button variant="contained" color="secondary" type="submit">
              Submit!
            </Button>
          </Hotkey>
        </FormControl>
      </form>
    </HotkeyProvider>
  );
}, 'You can select any of the options in the radio buttons by pressing `1`, `2` or `3`, and then submit the form by pressing `SPACE`. Press `shift+h` too show the available Tooltips.');
