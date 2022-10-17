var l=Object.defineProperty;var i=(o,n)=>l(o,"name",{value:n,configurable:!0});import{a as s,H as d}from"./Hotkey.42e4a3cb.js";import{b as e,j as t}from"./jsx-runtime.d55edad6.js";import{B as a}from"./Button.cfff0b65.js";import{T as c}from"./Typography.fbd95fb5.js";import"./index.ae6da253.js";import"./iframe.96ccea65.js";const f={title:"Core/Hotkey",component:s,parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
  onPress: (evt) => alert(\`Hotkey pressed: \${evt.key}\`),
};

export const DisabledHotkeys = Template.bind({});
DisabledHotkeys.args = {
  disabled: true,
  onPress: 'focus',
};
`,locationsMap:{focus:{startLoc:{col:48,line:14},endLoc:{col:1,line:52},startBody:{col:48,line:14},endBody:{col:1,line:52}},click:{startLoc:{col:48,line:14},endLoc:{col:1,line:52},startBody:{col:48,line:14},endBody:{col:1,line:52}},handler:{startLoc:{col:48,line:14},endLoc:{col:1,line:52},startBody:{col:48,line:14},endBody:{col:1,line:52}},"disabled-hotkeys":{startLoc:{col:48,line:14},endLoc:{col:1,line:52},startBody:{col:48,line:14},endBody:{col:1,line:52}}}},layout:"centered"}},r=i(o=>{const n=typeof o.onPress=="string"?o.onPress:"active";return e(d,{children:[t(s,{...o,combination:"z",children:e(a,{variant:"contained",color:"primary",style:{marginRight:"10px"},onClick:()=>alert("Z clicked"),autoFocus:!0,children:["Press Z to ",n," me!"]})}),t(s,{...o,combination:"x",children:e(a,{variant:"contained",color:"secondary",onClick:()=>alert("X clicked"),style:{marginRight:"10px"},children:["Press X to ",n," me!"]})}),o.disabled?t(c,{style:{marginTop:"10px",textAlign:"center"},children:"Hotkeys are disabled now!"}):e(c,{style:{marginTop:"10px",textAlign:"center"},children:["Press ",t("code",{children:"shift+h"})," to show the Tooltips"]})]})},"Template"),y=r.bind({});y.args={onPress:"focus"};const p=r.bind({});p.args={onPress:"click"};const m=r.bind({});m.args={onPress:o=>alert(`Hotkey pressed: ${o.key}`)};const k=r.bind({});k.args={disabled:!0,onPress:"focus"};const T=["Focus","Click","Handler","DisabledHotkeys"];export{p as Click,k as DisabledHotkeys,y as Focus,m as Handler,T as __namedExportsOrder,f as default};
//# sourceMappingURL=Hotkey.stories.a326100f.js.map
