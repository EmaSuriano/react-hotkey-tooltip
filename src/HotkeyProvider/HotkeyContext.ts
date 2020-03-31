import { createContext } from 'react';
import { TippyProps } from '@tippyjs/react';

export type HotKeyContext = {
  showTooltip: boolean;
  disabled: boolean;
  tooltipOptions: TippyProps;
};

const HotKeyContext = createContext<HotKeyContext>({
  showTooltip: false,
  disabled: false,
  tooltipOptions: {},
});

export default HotKeyContext;
