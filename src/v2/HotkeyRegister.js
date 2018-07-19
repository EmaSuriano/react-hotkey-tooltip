import { bind, unbind } from 'mousetrap';
import { ERROR_MESSAGES, KEYBOARD_EVENT, isHotkeyEqual } from './utils';

const _registeredHotkeys = [];

const isHotkeyRegistered = newHotkey =>
  _registeredHotkeys.some(isHotkeyEqual(newHotkey));

const HotkeyRegister = {
  addHotkey: (combination, action, event = KEYBOARD_EVENT.KEY_PRESS) => {
    const newHotkey = { combination, event };
    _registeredHotkeys.push(newHotkey);
    bind(combination, action, event);
  },
  removeHotkey: (combination, event = KEYBOARD_EVENT.KEY_PRESS) => {
    const index = _registeredHotkeys.findIndex(
      isHotkeyEqual({ combination, event }),
    );
    _registeredHotkeys.splice(index, 1);
    unbind(combination, event);
  },
};

Object.freeze(HotkeyRegister);
export default HotkeyRegister;
