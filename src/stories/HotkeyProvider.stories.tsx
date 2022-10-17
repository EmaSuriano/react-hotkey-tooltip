import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HotkeyProvider } from '../HotkeyProvider';
import { Hotkey } from '../Hotkey';
import { Button, Typography } from '@material-ui/core';

export default {
  title: 'Core/HotkeyProvider',
  component: HotkeyProvider,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof HotkeyProvider>;

const Template: ComponentStory<typeof HotkeyProvider> = (args) => (
  <HotkeyProvider {...args}>
    <Hotkey onPress="focus" combination="z">
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: '10px' }}
        onClick={() => alert('Z clicked')}
        autoFocus
      >
        Press Z to focus me!
      </Button>
    </Hotkey>
    <Hotkey onPress="focus" combination="x">
      <Button
        variant="contained"
        color="secondary"
        onClick={() => alert('X clicked')}
        style={{ marginRight: '10px' }}
      >
        Press X to focus me!
      </Button>
    </Hotkey>

    {args.disabled ? (
      <Typography style={{ marginTop: '10px', textAlign: 'center' }}>
        Hotkeys are disabled now!
      </Typography>
    ) : (
      <Typography style={{ marginTop: '10px', textAlign: 'center' }}>
        Press <code>{args.tooltipCombination || 'shift+h'}</code> to show the
        Tooltips
      </Typography>
    )}
  </HotkeyProvider>
);

export const Default = Template.bind({});

export const DisableTooltips = Template.bind({});
DisableTooltips.args = {
  disabled: true,
};

export const CustomizeTooltips = Template.bind({});
CustomizeTooltips.args = {
  tooltipOptions: {
    theme: 'light',
    arrow: false,
    animation: 'scale',
  },
  tooltipCombination: 'shift+j',
};
