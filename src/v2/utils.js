import { is, curry } from 'ramda';
import { hot } from 'react-hot-loader';

export const isFunction = is(Function);

export const KEYBOARD_EVENT = {
  KEY_PRESS: 'keypress',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
};

export const isValidEvent = event =>
  Object.values(KEYBOARD_EVENT).includes(event);

export const ERROR_MESSAGES = {
  MULTI_DEFINITION: combination =>
    `WARNING: The combination of ${combination} is being defined more than once, only the last one will work.`,
  HOTKEY_NOT_FOUND: combination =>
    `WARNING: The combination of ${combination} was not registered, please check you are not defining a combination more than once.`,
  EVENT_UNRECOGNIZED: event =>
    `ERROR: The event's name of ${event} is not valid, the valid events are [${Object.values(
      KEYBOARD_EVENT,
    ).join(', ')}].`,
  METHOD_NOT_FOUND_IN_CHILD: method =>
    `ERROR: The method of ${method} is not present in the DOMNode of the child, please check render.`,
};

export const isHotkeyEqual = curry(
  (hotkey1, hotkey2) =>
    hotkey1.combination === hotkey2.combination &&
    hotkey1.event === hotkey2.event,
);
