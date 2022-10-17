import React, { useState, useEffect } from 'react';
import { TippyProps } from '@tippyjs/react';
import { bindHoldCombination, unbindHoldCombination } from './utils';
import { HotkeyContext } from './HotkeyContext';

export const KEYBOARD_EVENT = {
  KEY_PRESS: 'keypress',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
};

type Props = {
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
 * */
export const HotkeyProvider = ({
  disabled = false,
  tooltipOptions = {},
  tooltipCombination = 'shift+h',
  children,
}: Props) => {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [currentCombination, setCurrentCombination] =
    useState(tooltipCombination);

  const changeTooltipVisibility = (on: boolean) => () => {
    if (disabled) setTooltipVisible(false);
    setTooltipVisible(on);
  };

  useEffect(() => {
    bindHoldCombination(currentCombination, changeTooltipVisibility);
  }, []);

  useEffect(() => {
    const oldCombination = currentCombination;
    setCurrentCombination(tooltipCombination);

    if (oldCombination !== currentCombination) {
      unbindHoldCombination(oldCombination);
      bindHoldCombination(currentCombination, changeTooltipVisibility);
    }

    return () => unbindHoldCombination(currentCombination);
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
