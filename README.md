<div style="text-align:center">
<h1>React Hotkey Tooltip</h1>
<img src ="./doc/logo.png" style="width: 200px" alt="React Hotkey Tooltip logo" />
</div>

[![Greenkeeper badge](https://badges.greenkeeper.io/EmaSuriano/react-hotkey-tooltip.svg)](https://greenkeeper.io/)
[![Travis badge](https://img.shields.io/travis/EmaSuriano/react-hotkey-tooltip.svg)](https://travis-ci.org/EmaSuriano/react-hotkey-tooltip)
[![npm package badge](https://img.shields.io/npm/v/react-hotkey-tooltip.svg)](https://www.npmjs.com/package/react-hotkey-tooltip)
[![Coveralls badge](https://img.shields.io/coveralls/github/EmaSuriano/react-hotkey-tooltip.svg)](https://coveralls.io/github/EmaSuriano/react-hotkey-tooltip)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)
[![Code style: Prettier](https://img.shields.io/badge/Code_style-Prettier-e31f2e.svg)](https://github.com/prettier/prettier)

A global Hotkey provider with built in tooltip for React

[Check Full Documentation!](https://react-hotkey-tooltip.netlify.com/)

## Why you should use it?

When working with hotkeys in a React application we will find many problems when trying to implement it:

- Hotkeys are only accesible inside a specific component (not globally).
- Must take care of the hotkeys manually throughout the life cycle.
- Have to provide a way so the user can see all the hotkeys on the screen.

This library will help you by declaring global hotkeys that automatically will be updated by any life cycle of the component and show a tooltip by pressing a combination of keys ✨

## Built with

Why mess up with document.addEventListener or positioning/styling tooltips if there are a lot of open source libraries that can do that for me. This are the chosen ones!

- [mousetrap](https://github.com/ccampbell/mousetrap): to bind and unbind hotkeys globally 🌐
- [react-tippy](https://github.com/tvkhoa/react-tippy): to display beautiful tooltips 😄

## Installation

The library is available as a package in npm and yarn, so use the one you prefer.

```bash
# npm
$ npm install react-hotkey-toolip

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

## License

MIT. Also check react-tippy.js' and mousetrap' license.
