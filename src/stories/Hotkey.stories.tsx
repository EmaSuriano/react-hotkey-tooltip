import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HotkeyProvider } from '../HotkeyProvider';
import { Hotkey } from '../Hotkey';
import { Button, Typography } from '@material-ui/core';

export default {
  title: 'Core/Hotkey',
  component: Hotkey,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Hotkey>;

const Template: ComponentStory<typeof Hotkey> = (args) => {
  const action = typeof args.onPress === 'string' ? args.onPress : 'active';

  return (
    <HotkeyProvider>
      <Hotkey {...args} combination="z">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={() => alert('Z clicked')}
          autoFocus
        >
          Press Z to {action} me!
        </Button>
      </Hotkey>
      <Hotkey {...args} combination="x">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => alert('X clicked')}
          style={{ marginRight: '10px' }}
        >
          Press X to {action} me!
        </Button>
      </Hotkey>

      {args.disabled ? (
        <Typography style={{ marginTop: '10px', textAlign: 'center' }}>
          Hotkeys are disabled now!
        </Typography>
      ) : (
        <Typography style={{ marginTop: '10px', textAlign: 'center' }}>
          Press <code>shift+h</code> to show the Tooltips
        </Typography>
      )}
    </HotkeyProvider>
  );
};

export const Focus = Template.bind({});
Focus.args = {
  onPress: 'focus',
};

export const Click = Template.bind({});
Click.args = {
  onPress: 'click',
};

export const Handler = Template.bind({});
Handler.args = {
  onPress: (evt) => alert(`Hotkey pressed: ${evt.key}`),
};

export const DisabledHotkeys = Template.bind({});
DisabledHotkeys.args = {
  disabled: true,
  onPress: 'focus',
};
