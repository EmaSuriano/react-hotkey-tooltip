import React, { useContext, useEffect, useState, useRef } from 'react';
import Tooltip from '@tippyjs/react';
import HotKeyContext from './HotkeyContext';
import { bindCombination, unbindCombination } from './events';

type Handler = (evt: EventTarget) => void;

type Props = {
  disabled?: boolean;
  children: React.ReactElement;
  combination: string;
  onPress: string | Handler;
};

const Hotkey = ({ disabled, children, combination, onPress }: Props) => {
  const { disabled: groupDisabled, showTooltip, tooltipOptions } = useContext(
    HotKeyContext,
  );

  const [currentCombination, setCurrentCombination] = useState(combination);
  const elementRef = useRef<Element>();
  const onPressHotkey = (evt: EventTarget) => {
    if (disabled || groupDisabled) return false;

    if (typeof onPress === 'function') return onPress(evt);

    if (elementRef && elementRef.current) {
      if (typeof elementRef.current[onPress] !== 'function') {
        throw new Error(
          `ERROR: The method of ${onPress} is not present in the DOMNode of the child, please check render.`,
        );
      }

      (elementRef.current[onPress] as Function)();
    }
  };

  useEffect(() => {
    bindCombination(currentCombination, onPressHotkey);
  }, []);

  useEffect(() => {
    const oldCombination = currentCombination;
    setCurrentCombination(combination);

    if (oldCombination !== currentCombination) {
      unbindCombination(oldCombination);
      bindCombination(currentCombination, onPressHotkey);
    }

    return () => unbindCombination(currentCombination);
  }, [combination]);

  const visible = showTooltip && !(disabled || groupDisabled);

  return (
    <Tooltip
      {...tooltipOptions}
      content={currentCombination.toUpperCase()}
      visible={visible}
    >
      {React.cloneElement(children, {
        ref: elementRef,
      })}
    </Tooltip>
  );
};

export default Hotkey;
