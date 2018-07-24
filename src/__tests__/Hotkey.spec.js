import React from 'react';
import { mount } from 'enzyme';
import Mousetrap from 'mousetrap';
import Hotkey from '../Hotkey';
import { Provider } from '../HotkeyContext';

describe('<Hotkey />', () => {
  const renderWithProvider = (providerValue, hotkey) =>
    mount(
      <Provider
        value={{
          disabled: false,
          showTooltip: false,
          tooltipOptions: {},
          ...providerValue,
        }}
      >
        {hotkey}
      </Provider>,
    );

  it('should render children', () => {
    const hotkey = mount(
      <Hotkey combination="a" onPress="click">
        <button type="button">a</button>
      </Hotkey>,
    );

    expect(hotkey.find('button')).toHaveLength(1);
  });

  describe('on hotkey pressed', () => {
    xit('should call dom function when onPress is string', () => {
      const onClick = jest.fn();
      mount(
        <Hotkey combination="a" onPress="click">
          <button type="button" onClick={onClick}>
            a
          </button>
        </Hotkey>,
      );

      Mousetrap.trigger('a');

      expect(onClick).toHaveBeenCalled();
    });

    it('should throw an error when onPress is string but it is not a function', () => {
      expect(() => {
        mount(
          <Hotkey combination="a" onPress="thisIsNotAValidFunction">
            <button type="button">a</button>
          </Hotkey>,
        );
        Mousetrap.trigger('a');
      }).toThrowError('ERROR');
    });

    it('should call function passed in onPress prop', () => {
      const onPress = jest.fn();
      mount(
        <Hotkey combination="a" onPress={onPress}>
          <button type="button">a</button>
        </Hotkey>,
      );

      Mousetrap.trigger('a');

      expect(onPress).toHaveBeenCalled();
    });

    it('should not call any function when is disabled', () => {
      const onPress = jest.fn();
      mount(
        <Hotkey combination="a" onPress={onPress} disabled>
          <button type="button">a</button>
        </Hotkey>,
      );

      Mousetrap.trigger('a');

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('Changing combination', () => {
    const onPress = jest.fn();
    let hotkey;

    beforeEach(() => {
      onPress.mockClear();
      hotkey = mount(
        <Hotkey combination="a" onPress={onPress}>
          <button type="button">a</button>
        </Hotkey>,
      );
      hotkey.setProps({ combination: 'b' });
    });

    it('should disable previous tooltipCombination', () => {
      Mousetrap.trigger('a');
      expect(onPress).not.toHaveBeenCalled();
    });

    it('should enable new tooltipCombination', () => {
      Mousetrap.trigger('b');
      expect(onPress).toHaveBeenCalled();
    });
  });

  it('should unbind hotkey when component unmount', () => {
    const onPress = jest.fn();
    const hotkey = mount(
      <Hotkey combination="a" onPress={onPress}>
        <button type="button">a</button>
      </Hotkey>,
    );
    hotkey.unmount();

    Mousetrap.trigger('a');

    expect(onPress).not.toHaveBeenCalled();
  });

  it('should do not call any function when disabled by context', () => {
    const onPress = jest.fn();
    renderWithProvider(
      { disabled: true },
      <Hotkey combination="a" onPress={onPress}>
        <button type="button">a</button>
      </Hotkey>,
    );

    Mousetrap.trigger('a');
    expect(onPress).not.toHaveBeenCalled();
  });

  describe('render Tooltip', () => {
    it('should send options provided by ConsumerContext', () => {
      const hotkey = renderWithProvider(
        {
          tooltipOptions: {
            theme: 'dark',
          },
        },
        <Hotkey combination="a" onPress="click">
          <button type="button">a</button>
        </Hotkey>,
      );
      expect(hotkey.find('Tooltip').prop('theme')).toBe('dark');
    });

    it('should send combination from props', () => {
      const hotkey = mount(
        <Hotkey combination="a" onPress="click">
          <button type="button">a</button>
        </Hotkey>,
      );

      expect(hotkey.find('Tooltip').prop('title')).toBe('A');
    });

    it('should render with multiple, manual and open in false', () => {
      const hotkey = mount(
        <Hotkey combination="a" onPress="click">
          <button type="button">a</button>
        </Hotkey>,
      );

      const { trigger, multiple, open } = hotkey.find('Tooltip').props();

      expect(trigger).toBe('manual');
      expect(open).toBe(false);
      expect(multiple).toBe(true);
    });

    it('should send open when showTooltip is true', () => {
      const hotkey = renderWithProvider(
        { showTooltip: true },
        <Hotkey combination="a" onPress="click">
          <button type="button">a</button>
        </Hotkey>,
      );
      expect(hotkey.find('Tooltip').prop('open')).toBe(true);
    });

    it('should do not send open when showTooltip is true and disabled is false', () => {
      const hotkey = renderWithProvider(
        { showTooltip: true, disabled: true },
        <Hotkey combination="a" onPress="click">
          <button type="button">a</button>
        </Hotkey>,
      );

      expect(hotkey.find('Tooltip').prop('open')).toBe(false);
    });
  });
});
