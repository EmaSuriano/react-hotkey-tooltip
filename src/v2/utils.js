import { is } from 'ramda';

export const isFunction = is(Function);

export const KEYBOARD_EVENT = {
  KEY_PRESS: 'keypress',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
};

export const ERROR_MESSAGES = {
  MULTI_DEFINITION: combination =>
    `WARNING: The combination of ${combination} is being defined more than once, only the last one will work.`,
  HOTKEY_NOT_FOUND: combination =>
    `WARNING: The combination of ${combination} was not registered, please check you are not defining a combination more than once.`,
  EVENT_UNRECOGNIZED: event =>
    `ERROR: The event's name of ${event} is not valid, the valid events are [${Object.values(
      KEYBOARD_EVENT,
    ).join(', ')}].`,
};
