import React, { Component } from 'react';
import { render } from 'react-dom';
import Menu from './Menu1';
import './Demo.css';

export default class Demo extends Component {
  state = {
    showMenu: true,
  };

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

  render() {
    return (
      <div className="main-container">
        <h1>react-hotkey-tooltip</h1>
        <div className="container">
          <button onClick={this.toggleMenu}>Toggle</button>
          {this.state.showMenu && <Menu />}
        </div>
      </div>
    );
  }
}
