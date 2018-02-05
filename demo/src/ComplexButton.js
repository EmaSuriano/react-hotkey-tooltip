import React, { Component } from 'react';

export default class ComplexButton extends Component {
  focus = () => {
    this.button.focus();
  };

  render() {
    return (
      <span>
        <p>Complex Button</p>
        <button onClick={this.props.onClick} ref={c => (this.button = c)}>
          Click me!
        </button>
      </span>
    );
  }
}
