export const isFunction = v => typeof v === 'function';

export const KEYBOARD_EVENT = {
  KEY_PRESS: 'keypress',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
};

export const ERROR_MESSAGES = {
  METHOD_NOT_FOUND_IN_CHILD: method =>
    `ERROR: The method of ${method} is not present in the DOMNode of the child, please check render.`,
};
