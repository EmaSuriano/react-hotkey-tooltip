import { createContext } from 'react';
import { TippyProps } from '@tippyjs/react';

type Context = {
  showTooltip: boolean;
  disabled: boolean;
  tooltipOptions: TippyProps;
};

export const HotkeyContext = createContext<Context>({
  showTooltip: false,
  disabled: false,
  tooltipOptions: {},
});
