# React Hotkey Tooltip

[![Build Status](https://travis-ci.com/EmaSuriano/react-hotkey-tooltip.svg?branch=master)](https://travis-ci.com/EmaSuriano/react-hotkey-tooltip)
[![npm version](https://badge.fury.io/js/react-hotkey-tooltip.svg)](https://badge.fury.io/js/react-hotkey-tooltip)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<div align="center">
  <a href="https://emasuriano.github.io/react-hotkey-tooltip/">
    <img alt="react-hotkey-tooltip logo" src="./docs/logo.png" height="150px" />
  </a>
</div>

<div align="center">
  <strong>A global Hotkey provider with built in tooltip for React</strong>
</div>

## [Docs](https://emasuriano.github.io/react-hotkey-tooltip)

## Why you should use it?

When working with Hotkeys in a React application we will find many problems when trying to implement it:

- Hotkeys are only accessible inside a specific component (not globally).
- Must take care of the Hotkeys manually throughout the life cycle.
- Have to provide a way so the user can see all the Hotkeys on the screen.

This library will help you by declaring global Hotkeys that automatically will be updated by any life cycle of the component and show a tooltip by pressing a combination of keys ✨

## Built with

Why mess up with document.addEventListener or positioning/styling Tooltips if there are a lot of open source libraries that can do that for me. These are the chosen ones!

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

MIT. Also check `react-tippy.js`' and `mousetrap`' license.
