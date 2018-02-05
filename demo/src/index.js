import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo from './Demo';

class Demo extends Component {
  state = {
    showMenu: true,
  };

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

  render() {
    return (
      <div>
        <button onClick={this.toggleMenu}>Toggle</button>
        {this.state.showMenu && <Menu />}
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
