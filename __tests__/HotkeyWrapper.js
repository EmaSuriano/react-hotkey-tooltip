import React from 'react';
import { shallow, configure } from 'enzyme';
import HotkeyWraper from '../src/HotkeyWrapper';
import { inspect } from 'util';

describe('<HotkeyWraper />', () => {
  const tooltipProps = {
    arrow: true,
  };

  let hotkeyWraper;
  let onHotkeyPressed = jest.fn();
  let instance;

  beforeEach(() => {
    hotkeyWraper = shallow(
      <HotkeyWraper hotkey="a" onHotkeyPressed={onHotkeyPressed}>
        <p>Inner children</p>
      </HotkeyWraper>,
    );
  });

  describe('render', () => {
    it('should render Tooltip with children, title, open and tooltipProps when disableTooltip is false', () => {
      const tooltip = hotkeyWraper.find('Tooltip');

      expect(tooltip.exists()).toBe(true);
      expect(tooltip.prop('title')).toBe('A');
      expect(tooltip.prop('open')).toBe(hotkeyWraper.state('showTooltip'));
      expect(tooltip.prop('trigger')).toBe('manual');
      expect(tooltip.props()).toMatchObject(
        expect.objectContaining(tooltipProps),
      );
    });

    it('should render children only when disableTooltip is true', () => {});
  });

  describe('inner methods', () => {
    describe('setShowTooltip', () => {
      it('should call setState when showTooltip is different from the state one', () => {});

      it('should not call setState when showTooltip is equal from the state one', () => {});
    });
  });

  describe('lifecycle', () => {
    describe('componentDidMount', () => {
      it('should bind hotkey with Mousetrap and call addNewTooltipHelp when disableTooltip is false', () => {});

      it('should only bind hotkey with Mousetrap when disableTooltip is true', () => {});
    });

    describe('componentWillUnmount', () => {
      it('should unbind hotkey with Mousetrap and call removeToolTipHelp when disableTooltip is false', () => {});

      it('should only unbind hotkey with Mousetrap when disableTooltip is true', () => {});
    });
  });
});
