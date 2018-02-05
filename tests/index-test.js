import expect from 'expect';
import React from 'react';
import { shallow, configure } from 'enzyme';
import HotkeyWraper from '../src';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<HotkeyWraper />', () => {
  let hotkeyWraper;
  let onHotkeyPressed = () => console.log('asdasd');

  beforeEach(() => {
    hotkeyWraper = shallow(
      <HotkeyWraper hotkey="a" onHotkeyPressed={onHotkeyPressed}>
        <p>Inner children</p>
      </HotkeyWraper>,
    );
  });

  it('should render something!', () => {
    expect(hotkeyWraper.exists()).toBe(true);
  });
});
