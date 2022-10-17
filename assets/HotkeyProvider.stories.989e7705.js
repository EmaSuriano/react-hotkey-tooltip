var p=Object.defineProperty;var n=(t,c)=>p(t,"name",{value:c,configurable:!0});import{H as l,a as i}from"./Hotkey.42e4a3cb.js";import{b as r,j as o}from"./jsx-runtime.d55edad6.js";import{B as s}from"./Button.cfff0b65.js";import{T as a}from"./Typography.fbd95fb5.js";import"./index.ae6da253.js";import"./iframe.96ccea65.js";const T={title:"Core/HotkeyProvider",component:l,parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:56,line:14},endLoc:{col:1,line:49},startBody:{col:56,line:14},endBody:{col:1,line:49}},"disable-tooltips":{startLoc:{col:56,line:14},endLoc:{col:1,line:49},startBody:{col:56,line:14},endBody:{col:1,line:49}},"customize-tooltips":{startLoc:{col:56,line:14},endLoc:{col:1,line:49},startBody:{col:56,line:14},endBody:{col:1,line:49}}}},layout:"centered"}},e=n(t=>r(l,{...t,children:[o(i,{onPress:"focus",combination:"z",children:o(s,{variant:"contained",color:"primary",style:{marginRight:"10px"},onClick:()=>alert("Z clicked"),autoFocus:!0,children:"Press Z to focus me!"})}),o(i,{onPress:"focus",combination:"x",children:o(s,{variant:"contained",color:"secondary",onClick:()=>alert("X clicked"),style:{marginRight:"10px"},children:"Press X to focus me!"})}),t.disabled?o(a,{style:{marginTop:"10px",textAlign:"center"},children:"Hotkeys are disabled now!"}):r(a,{style:{marginTop:"10px",textAlign:"center"},children:["Press ",o("code",{children:t.tooltipCombination||"shift+h"})," to show the Tooltips"]})]}),"Template"),x=e.bind({}),d=e.bind({});d.args={disabled:!0};const m=e.bind({});m.args={tooltipOptions:{theme:"light",arrow:!1,animation:"scale"},tooltipCombination:"shift+j"};const H=["Default","DisableTooltips","CustomizeTooltips"];export{m as CustomizeTooltips,x as Default,d as DisableTooltips,H as __namedExportsOrder,T as default};
//# sourceMappingURL=HotkeyProvider.stories.989e7705.js.map
