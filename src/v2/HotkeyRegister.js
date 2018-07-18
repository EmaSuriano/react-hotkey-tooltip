import { bind, unbind } from 'mousetrap';
import { ERROR_MESSAGES, KEYBOARD_EVENT } from './utils';

const _registeredHotkeys = [];

const isHotkeyRegistered = (newCombination, newEvent) =>
  _registeredHotkeys.some(
    ({ combination, event }) =>
      combination === newCombination && event === newEvent,
  );

const HotkeyRegister = {
  addHotkey: (combination, action, event = KEYBOARD_EVENT.KEY_PRESS) => {
    if (!KEYBOARD_EVENT.includes(event)) {
      return console.error(ERROR_MESSAGES.EVENT_UNRECOGNIZED(event));
    }
    if (isHotkeyRegistered(combination)) {
      console.warning(ERROR_MESSAGES.ERROR_MULTI_DEFINITION(combination));
    }
    _registeredHotkeys.push(combination);
    bind(combination, action, event);
  },
  removeHotkey: (combination, event) => {
    if (isHotkeyRegistered(combination)) {
      console.warning(ERROR_MESSAGES.ERROR_HOTKEY_NOT_FOUND(combination));
      return;
    }
    _registeredHotkeys.push(combination);
    unbind(combination, event);
  },
};

Object.freeze(HotkeyRegister);
export default HotkeyRegister;
