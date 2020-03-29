import React, { useContext, useEffect, useRef } from 'react';
import Tooltip from '@tippyjs/react';
import HotKeyContext from './HotkeyContext';
import { bindCombination, unbindCombination } from './events';
import './mousetrap-global-bind.js';

type Handler = (evt: EventTarget) => void;

type Props = {
  disabled?: boolean;
  children: React.ReactElement;
  combination: string;
  // @default: 3
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

  // const [currentCombination, setCurrentCombination] = useState(combination);
  const elementRef = useRef<Element>();
  const previousCombination = usePrevious(combination);

  const onPressHotkey = (evt: EventTarget) => {
    if (disabled || groupDisabled) return false;

    if (typeof onPress === 'function') return onPress(evt);

    if (elementRef && elementRef.current) {
      if (typeof elementRef.current[onPress] !== 'function') {
        throw new Error(
          `ERROR: The method of ${onPress} is not present in the DOMNode of the child, please check render.`,
        );
      }

      (elementRef.current[onPress] as Function)(evt);
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
