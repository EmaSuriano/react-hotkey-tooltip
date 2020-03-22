import { createContext } from 'react';

export type HotKeyContext = {
  showTooltip: boolean;
  disabled: boolean;
  tooltipOptions: any;
};

const HotKeyContext = createContext<HotKeyContext>({
  showTooltip: false,
  disabled: false,
  tooltipOptions: {},
});

export default HotKeyContext;
