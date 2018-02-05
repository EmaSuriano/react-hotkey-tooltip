import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './Menu1';
import Example from '../../src';
import './Demo.css';

class Demo extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>react-hotkey-tooltip</h1>
        <div className="container">
          <Example />
          <Menu />
        </div>
      </div>
    );
  }
}

export default Demo;
