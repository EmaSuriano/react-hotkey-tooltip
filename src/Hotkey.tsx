import React, { useContext, useEffect, useState } from 'react';
import Tooltip from '@tippyjs/react';
import HotKeyContext from './HotkeyContext';
import { bindCombination, unbindCombination } from './events';

type Props = {
  disabled?: boolean;
  children: React.ReactElement;
  combination: string;
  onPress: (evt: EventTarget) => any | string;
};

const Hotkey = ({ disabled, children, combination, onPress }: Props) => {
  const { disabled: groupDisabled, showTooltip, tooltipOptions } = useContext(
    HotKeyContext,
  );

  const [currentCombination, setCurrentCombination] = useState(combination);
  const elementRef = React.createRef<Element>();

  const onPressHotkey = (evt: EventTarget) => {
    if (disabled) return false;

    if (typeof onPress === 'function') return onPress(evt);

    if (elementRef && elementRef.current) {
      const eventHandler = elementRef.current[onPress];
      if (typeof eventHandler === 'function') {
        (eventHandler as Function)(evt);
      }

      console.error(
        `ERROR: The method of ${onPress} is not present in the DOMNode of the child, please check render.`,
      );
    }
  };

  useEffect(() => {
    const oldCombination = currentCombination;
    setCurrentCombination(combination);

    const combinationHasChanged = oldCombination !== currentCombination;
    if (combinationHasChanged) {
      const isFirstTime = currentCombination === '';
      if (!isFirstTime) {
        unbindCombination(oldCombination);
      }

      bindCombination(oldCombination, onPressHotkey);
    }

    return () => unbindCombination(currentCombination);
  }, [combination]);

  const visible = showTooltip && !disabled;
  return (
    <Tooltip
      {...tooltipOptions}
      content={currentCombination.toUpperCase()}
      trigger="manual"
      disabled={disabled || groupDisabled}
      visible={visible}
    >
      {React.cloneElement(children, {
        ref: elementRef,
      })}
    </Tooltip>
  );
};

export default Hotkey;
