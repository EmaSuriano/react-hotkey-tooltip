import React, { useState, useEffect } from 'react';
import { bindCombination, unbindCombination } from './events';
import HotkeyContext from './HotkeyContext';
import { TippyProps } from '@tippyjs/react';

export const KEYBOARD_EVENT = {
  KEY_PRESS: 'keypress',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
};

type HotkeyProviderProps = {
  /** Disabled all Hotkeys */
  disabled?: boolean;
  /** Options passed to react-tippy */
  tooltipOptions?: TippyProps;
  /** Key combination to trigger the tooltips */
  tooltipCombination?: string;
  /** Your React components */
  children: React.ReactNode;
};

/**
 * The Top wrapper component that handles when to show the Tooltips and globally disabled them.
 * Please be aware that hotkeys don't work inside Storybook Docs view ...
 * */
const HotkeyProvider = ({
  disabled = false,
  tooltipOptions = {},
  tooltipCombination = 'shift+h',
  children,
}: HotkeyProviderProps) => {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [currentCombination, setCurrentCombination] = useState(
    tooltipCombination,
  );

  const changeTooltipVisibility = (on: boolean) => () => {
    if (disabled) setTooltipVisible(false);
    setTooltipVisible(on);
  };

  useEffect(() => {
    bindCombination(currentCombination, changeTooltipVisibility, true);
  }, []);

  useEffect(() => {
    const oldCombination = currentCombination;
    setCurrentCombination(tooltipCombination);

    if (oldCombination !== currentCombination) {
      unbindCombination(oldCombination, true);
      bindCombination(currentCombination, changeTooltipVisibility, true);
    }

    return () => unbindCombination(currentCombination, true);
  }, [tooltipCombination]);

  const contextValue = {
    showTooltip: tooltipVisible,
    disabled,
    tooltipOptions,
  };

  return (
    <HotkeyContext.Provider value={contextValue}>
      {children}
    </HotkeyContext.Provider>
  );
};

export default HotkeyProvider;
