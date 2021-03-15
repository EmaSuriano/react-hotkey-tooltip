import React, { useContext, useEffect, useRef } from 'react';
import Tooltip from '@tippyjs/react';
import 'mousetrap-global-bind';
import HotKeyContext from '../HotkeyProvider/HotkeyContext';
import { bindCombination, unbindCombination, Handler } from '../utils/events';

export type Props = {
  /** Disabled all Hotkey and Tooltip */
  disabled?: boolean;
  /** Your React component to wrap */
  children: React.ReactElement;
  /** Key combination to trigger the tooltips */
  combination: string;
  /** Action to trigger when the hotkey is pressed */
  onPress: string | Handler;
};

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/**
 * Component responsible for positioning the tooltip in the application and calling the action
 */
const Hotkey = ({ disabled, children, combination, onPress }: Props) => {
  const { disabled: groupDisabled, showTooltip, tooltipOptions } = useContext(
    HotKeyContext,
  );

  const elementRef = useRef<HTMLElement>();
  const previousCombination = usePrevious(combination);

  const onPressHotkey = (evt: Event) => {
    if (disabled || groupDisabled) return;

    if (typeof onPress === 'function') return onPress(evt);

    if (elementRef && elementRef.current) {
      if (
        typeof elementRef.current[onPress as keyof GlobalEventHandlers] ===
        'function'
      ) {
        // @ts-ignore
        return elementRef.current[onPress](evt);
      }

      throw new Error(
        `ERROR: The method of ${onPress} is not present in the DOMNode of the child, please check render.`,
      );
    }
  };

  useEffect(() => {
    bindCombination(combination, onPressHotkey);
  }, []);

  useEffect(() => {
    if (previousCombination && combination !== previousCombination) {
      unbindCombination(previousCombination);
      bindCombination(combination, onPressHotkey);
    }

    return () => unbindCombination(combination);
  }, [combination]);

  const visible = showTooltip && !(disabled || groupDisabled);

  return (
    <Tooltip
      {...tooltipOptions}
      content={combination.toUpperCase()}
      visible={visible}
    >
      {React.cloneElement(children, {
        ref: elementRef,
      })}
    </Tooltip>
  );
};

export default Hotkey;
