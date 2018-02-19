import React from 'react';
import HotkeyWrapper from 'lib';

const BuiltWith = () => (
  <section>
    <h2>Built with</h2>
    <p>
      Why mess up with document.addEventListener or positioning/styling tooltips
      if there are a lot of open source libraries that can do that for me. Those
      are the chosen ones!
    </p>
    <ul>
      <li>
        <HotkeyWrapper
          hotkey="m+t"
          onHotkeyPressed={() => this.mousetrapLink.click()}
          tooltipProps={{
            arrow: true,
            position: 'top',
          }}
          tooltipHotkey="h"
        >
          <a
            href="https://github.com/ccampbell/mousetrap"
            ref={a => (this.mousetrapLink = a)}
            target="_blank"
          >
            mousetrap
          </a>
        </HotkeyWrapper>: to bind and unbind hotkeys globally 🌐
      </li>
      <li>
        <HotkeyWrapper
          hotkey="r+t"
          onHotkeyPressed={() => this.reactTippyLink.click()}
          tooltipHotkey="h"
        >
          <a
            href="https://github.com/tvkhoa/react-tippy"
            ref={a => (this.reactTippyLink = a)}
            target="_blank"
          >
            react-tippy
          </a>
        </HotkeyWrapper>: to display beautiful tooltips 😄
      </li>
    </ul>
  </section>
);

export default BuiltWith;
