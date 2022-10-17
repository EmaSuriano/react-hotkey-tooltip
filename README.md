# React Hotkey Tooltip

[![Master](https://github.com/EmaSuriano/react-hotkey-tooltip/actions/workflows/master.yml/badge.svg)](https://github.com/EmaSuriano/react-hotkey-tooltip/actions/workflows/master.yml)
[![npm version](https://badge.fury.io/js/react-hotkey-tooltip.svg)](https://badge.fury.io/js/react-hotkey-tooltip)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d8820ba2-2f51-4aa9-be7a-b11e6b7b65ae/deploy-status)](https://app.netlify.com/sites/react-hotkey-tooltip-storybook/deploys)

<div align="center">
  <a href="https://react-hotkey-tooltip-storybook.netlify.app" alt="logo">
    <img alt="react-hotkey-tooltip logo" src="https://raw.githubusercontent.com/EmaSuriano/react-hotkey-tooltip/master/docs/logo.png" height="150px" />
  </a>
</div>

<div align="center">
  <strong>A global Hotkey provider with built in tooltip for React</strong>
</div>

## [Docs 📚](https://react-hotkey-tooltip-storybook.netlify.app)

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

For more examples please consider checking the [Docs](https://react-hotkey-tooltip-storybook.netlify.app) section.

## License

MIT. Also check `react-tippy.js`' and `mousetrap`' license.
