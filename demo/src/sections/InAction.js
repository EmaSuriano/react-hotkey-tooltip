import React from 'react';
import HotkeyWrapper from 'lib';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';

const FocusableButton = () => (
  <HotkeyWrapper
    hotkey="b"
    onHotkeyPressed={() => this.button.focus()}
    tooltipHotkey="h"
  >
    <button onClick={() => console.log('click!')} ref={c => (this.button = c)}>
      FocusableButton
    </button>
  </HotkeyWrapper>
);

const InActionCode = `import React from 'react';
import HotkeyWrapper from 'react-hotkey-wrapper';

const FocusableButton = () => (
  <HotkeyWrapper
    hotkey="b"
    onHotkeyPressed={() => this.button.focus()}
    tooltipHotkey="h"
  >
    <button onClick={() => console.log('click!')} ref={c => (this.button = c)}>
      FocusableButton
    </button>
  </HotkeyWrapper>
);`;

const InAction = () => (
  <section>
    <h2>In action</h2>
    <SyntaxHighlighter language="javascript" style={ocean}>
      {InActionCode}
    </SyntaxHighlighter>
    <p>This is the component from the above code, try to call his hotkey!</p>
    <div style={{ textAlign: 'center' }}>
      <FocusableButton />
    </div>
  </section>
);

export default InAction;
