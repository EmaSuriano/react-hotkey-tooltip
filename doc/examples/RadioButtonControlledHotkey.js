/* eslint no-alert: 0 */
import React, { Component, Fragment } from 'react';
import { Hotkey, HotkeyProvider } from '../../src';

const Separator = () => (
  <Fragment>
    <br />
    <br />
  </Fragment>
);

export default class RadioButtonControlledHotkey extends Component {
  state = {
    selectedRadio: '1',
  };

  onSubmit = e => {
    e.preventDefault();
    const { selectedRadio } = this.state;
    alert(`Selected Radio: ${selectedRadio}`);
  };

  onChangeRadio = ({ target: { id } }) => this.setState({ selectedRadio: id });

  render() {
    const { selectedRadio } = this.state;
    return (
      <HotkeyProvider
        tooltipOptions={{
          theme: 'light',
          size: 'big',
          arrow: true,
          position: 'right',
        }}
      >
        <form onSubmit={this.onSubmit}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <Hotkey combination="1" onPress="click">
                <label>
                  <input
                    type="radio"
                    name="group"
                    id="1"
                    className="mousetrap"
                    onChange={this.onChangeRadio}
                    checked={selectedRadio === '1'}
                  />
                  First
                </label>
              </Hotkey>
              <Separator />
              <Hotkey combination="2" onPress="click">
                <label>
                  <input
                    type="radio"
                    name="group"
                    id="2"
                    className="mousetrap"
                    onChange={this.onChangeRadio}
                    checked={selectedRadio === '2'}
                  />
                  Second
                </label>
              </Hotkey>
              <Separator />
              <Hotkey combination="3" onPress="click">
                <label>
                  <input
                    type="radio"
                    name="group"
                    id="3"
                    className="mousetrap"
                    onChange={this.onChangeRadio}
                    checked={selectedRadio === '3'}
                  />
                  Third
                </label>
              </Hotkey>
            </div>
            <Hotkey combination="space" onPress="click">
              <input type="submit" value="Submit!" />
            </Hotkey>
          </div>
        </form>
      </HotkeyProvider>
    );
  }
}
