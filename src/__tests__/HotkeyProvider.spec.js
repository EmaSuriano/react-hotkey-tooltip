import React from 'react';
import { mount } from 'enzyme';
import Mousetrap from 'mousetrap';
import Hotkey from '../Hotkey';
import HotkeyProvider from '../HotkeyProvider';

describe('<HotkeyProvider />', () => {
  let hotkey;
  let triggerKey;

  beforeEach(() => {
    hotkey = mount(
      <HotkeyProvider tooltipCombination="enter">
        <Hotkey combination="a" onPress="click">
          <button type="button">Click me!</button>
        </Hotkey>
      </HotkeyProvider>,
    );
    triggerKey = (key, event) => {
      Mousetrap.trigger(key, event);

      hotkey.update();
    };
  });

  it('should render HotkeyProvider with Hotkey', () => {
    expect(hotkey.find(HotkeyProvider)).toHaveLength(1);
    expect(hotkey.find(Hotkey)).toHaveLength(1);
  });

  it('should display tooltip when pressing tooltipCombination', () => {
    triggerKey('enter', 'keydown');

    expect(hotkey.find('Tooltip').props().open).toBe(true);
  });

  it('should hide tooltip after pressing tooltipCombination', () => {
    triggerKey('enter', 'keydown');
    triggerKey('enter', 'keyup');

    expect(hotkey.find('Tooltip').props().open).toBe(false);
  });

  describe('Changing tooltipCombination', () => {
    beforeEach(() => {
      hotkey.setProps({ tooltipCombination: 'shift' });
    });

    it('should disable previous tooltipCombination', () => {
      triggerKey('enter', 'keydown');
      expect(hotkey.find('Tooltip').props().open).toBe(false);
    });

    it('should enable new tooltipCombination', () => {
      triggerKey('shift', 'keydown');
      expect(hotkey.find('Tooltip').props().open).toBe(true);
    });
  });

  it('should do not display tooltip when is disabled', () => {
    hotkey.setProps({ disabled: true });

    triggerKey('enter', 'keydown');

    expect(hotkey.find('Tooltip').props().open).toBe(false);
  });

  it('should send tooltipOptions to Tooltip', () => {
    hotkey.setProps({
      tooltipOptions: {
        theme: 'light',
      },
    });

    triggerKey('enter', 'keydown');

    expect(hotkey.find('Tooltip').props().theme).toBe('light');
  });

  it('should unbind hotkey when component unmount', () => {
    const unbindSpy = jest.spyOn(Mousetrap, 'unbind');
    hotkey.unmount();

    expect(unbindSpy).toHaveBeenCalledTimes(3);

    // HotkeyProvider
    expect(unbindSpy).toHaveBeenCalledWith('enter', 'keydown');
    expect(unbindSpy).toHaveBeenCalledWith('enter', 'keyup');

    // Hotkey
    expect(unbindSpy).toHaveBeenCalledWith('a');
  });
});
