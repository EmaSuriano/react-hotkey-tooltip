import React from 'react';
import { mount } from 'enzyme';
import { Hotkey, HotkeyProvider } from '..';
import Mousetrap from 'mousetrap';

describe('Hotkey.integration', () => {
  let hotkey;

  beforeEach(() => {
    hotkey = mount(
      <HotkeyProvider tooltipCombination="enter">
        <Hotkey combination="a" onPress="click">
          <button type="button">Click me!</button>
        </Hotkey>
      </HotkeyProvider>,
    );
  });

  it('should render HotkeyProvider with Hotkey', () => {
    expect(hotkey.find(HotkeyProvider)).toHaveLength(1);
    expect(hotkey.find(Hotkey)).toHaveLength(1);
  });

  it('should display tooltip when pressing tooltipCombination', () => {
    console.log(hotkey.html());

    hotkey
      .find('button')
      .simulate('keydown', { key: 'enter', keyCode: 13, which: 13 });

    console.log(hotkey.html());
  });
});
