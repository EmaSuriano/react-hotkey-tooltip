import React, { useState, useEffect } from 'react';
import { bindCombination, unbindCombination } from './events';
import HotkeyContext from './HotkeyContext';
import { TippyProps } from '@tippyjs/react';

export const KEYBOARD_EVENT = {
  KEY_PRESS: 'keypress',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
};

type Props = {
  disabled?: boolean;
  tooltipOptions?: TippyProps;
  tooltipCombination?: string;
  children: React.ReactNode;
};

const HotkeyProvider = ({
  disabled = false,
  tooltipOptions = {},
  tooltipCombination = 'shift+h',
  children,
}: Props) => {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [currentCombination, setCurrentCombination] = useState('');

  const changeTooltipVisibility = (on: boolean) => () => {
    if (on === tooltipVisible || disabled) return;
    setTooltipVisible(true);
  };

  useEffect(() => {
    const oldCombination = currentCombination;
    setCurrentCombination(tooltipCombination);

    const combinationHasChanged = oldCombination !== currentCombination;
    if (combinationHasChanged) {
      const isFirstTime = currentCombination === '';
      if (!isFirstTime) {
        unbindCombination(oldCombination, true);
      }

      bindCombination(oldCombination, changeTooltipVisibility, true);
    }

    return () => unbindCombination(currentCombination, true);
  }, [tooltipCombination]);

  const value = {
    showTooltip: tooltipVisible && !disabled,
    disabled,
    tooltipOptions,
  };

  return (
    <HotkeyContext.Provider value={value}>{children}</HotkeyContext.Provider>
  );
};

export default HotkeyProvider;
