import React, { Component } from 'react';
import mouseTrap from 'react-mousetrap';

import {
  InputWithShortcut,
  SelectWithShortcut,
  ButtonWithShortcut,
} from '../shared';
import '../App.css';

const optionValues = [
  {
    value: 1,
    name: 'Deadmau5',
  },
  {
    value: 2,
    name: 'Clapton',
  },
  {
    value: 3,
    name: 'Duki',
  },
  {
    value: 4,
    name: 'Khea',
  },
];

const initialState = {
  input: '',
  select: optionValues[0].value,
};

class Menu extends Component {
  state = initialState;

  toggleRow = props => console.log(props);

  clearState = () => this.setState(initialState);

  onConfirm = () => console.log(this.state);

  onInputChange = event => this.setState({ input: event.target.value });

  onSelectValueChange = event => this.setState({ select: event.target.value });

  render() {
    return (
      <div className="Menu">
        <InputWithShortcut
          shortcut="shift+1"
          shortcutName={'Get Focus on Select with Shift + 1'}
          value={this.state.input}
          onChange={this.onInputChange}
        />

        <p>Shift + 2</p>
        <SelectWithShortcut
          optionValues={optionValues}
          shortcut="shift+2"
          value={this.state.select}
          onChange={this.onSelectValueChange}
        />

        <div style={{ marginTop: 30 }}>
          <ButtonWithShortcut onClick={this.clearState} shortcut={'shift+3'}>
            Delete (shift+3)
          </ButtonWithShortcut>
          <ButtonWithShortcut onClick={this.onConfirm} shortcut={'shift+4'}>
            Confirm (shift+4)
          </ButtonWithShortcut>
        </div>
      </div>
    );
  }
}

export default mouseTrap(Menu);
