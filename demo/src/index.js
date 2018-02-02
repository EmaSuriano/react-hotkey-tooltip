import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './Menu1';
import Example from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-hotkey-tooltip Demo</h1>
        <Example />
        <Menu />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
