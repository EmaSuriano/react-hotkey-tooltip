import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';

const installCommand = 'npm install react-hotkey-tooltip';

const Installation = () => (
  <section>
    <h2>Installation</h2>
    <SyntaxHighlighter language="javascript" style={ocean}>
      {installCommand}
    </SyntaxHighlighter>
  </section>
);

export default Installation;
