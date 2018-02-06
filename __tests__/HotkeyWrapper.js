import React from 'react';
import { shallow, configure } from 'enzyme';
import HotkeyWraper from '../src/HotkeyWrapper';

describe('<HotkeyWraper />', () => {
  let hotkeyWraper;
  let onHotkeyPressed = jest.fn();

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
