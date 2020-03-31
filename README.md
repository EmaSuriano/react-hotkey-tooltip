# React Hotkey Tooltip

[![Travis badge](https://api.travis-ci.org/EmaSuriano/react-hotkey-tooltip.svg)](https://travis-ci.org/EmaSuriano/react-hotkey-tooltip)
[![npm version](https://badge.fury.io/js/react-hotkey-tooltip.svg)](https://badge.fury.io/js/react-hotkey-tooltip)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<div align="center">
  <a href="https://emasuriano.github.io/react-hotkey-tooltip/">
    <img alt="react-hotkey-tooltip logo" src="./doc/logo.png" height="150px" />
  </a>
</div>

<div align="center">
  <strong>A global Hotkey provider with built in tooltip for React</strong>
</div>

## [Docs](https://emasuriano.github.io/react-hotkey-tooltip)

## Why you should use it?

When working with hotkeys in a React application we will find many problems when trying to implement it:

- Hotkeys are only accessible inside a specific component (not globally).
- Must take care of the hotkeys manually throughout the life cycle.
- Have to provide a way so the user can see all the hotkeys on the screen.

This library will help you by declaring global hotkeys that automatically will be updated by any life cycle of the component and show a tooltip by pressing a combination of keys ✨

## Built with

Why mess up with document.addEventListener or positioning/styling tooltips if there are a lot of open source libraries that can do that for me. These are the chosen ones!

- [mousetrap](https://github.com/ccampbell/mousetrap): to bind and unbind Hotkeys globally 🌐
- [@tippyjs/react](https://github.com/atomiks/tippyjs-react): to display beautiful Tooltips 😄

## Installation

You can the package manager you want:

```bash
# npm
$ npm install react-hotkey-tooltip

# yarn
$ yarn add react-hotkey-tooltip
```

## Example

```javascript
import React from 'react';
import { Hotkey, HotkeyProvider } from 'react-hotkey-tooltip';

const ClickableButtonByPressingA = () => (
  <HotkeyProvider>
    <Hotkey combination="a" onPress="click">
      <button onClick={() => alert('You have clicked me!')}>
        Click me using your keyboard!
      </button>
    </Hotkey>
  </HotkeyProvider>
);
```

For more examples please consider checking the [Docs](https://emasuriano.github.io/react-hotkey-tooltip) section.

## License

MIT. Also check react-tippy.js' and mousetrap' license.
