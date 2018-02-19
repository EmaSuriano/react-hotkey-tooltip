import React from 'react';
import { shallow } from 'enzyme';
import MouseTrap from 'mousetrap';
import HotkeyWraper from '../HotkeyWrapper';
import helpTooltipHandler from '../helpTooltipHandler';

jest.mock('mousetrap', () => ({
  bind: jest.fn(),
  unbind: jest.fn(),
}));

jest.mock('../helpTooltipHandler', () => ({
  addNewTooltipHelp: jest.fn(),
  removeToolTipHelp: jest.fn(),
}));

describe('<HotkeyWraper />', () => {
  const tooltipProps = {
    arrow: true,
  };

  let hotkeyWraper;
  let onHotkeyPressed;

  beforeEach(() => {
    MouseTrap.bind.mockClear();
    MouseTrap.unbind.mockClear();

    helpTooltipHandler.addNewTooltipHelp.mockClear();
    helpTooltipHandler.removeToolTipHelp.mockClear();

    onHotkeyPressed = jest.fn();

    hotkeyWraper = shallow(
      <HotkeyWraper
        hotkey="a"
        onHotkeyPressed={onHotkeyPressed}
        tooltipProps={tooltipProps}
      >
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
      expect(tooltip.prop('multiple')).toBe(true);
      expect(tooltip.prop('children')).toEqual(<p>Inner children</p>);
      expect(tooltip.props()).toEqual(expect.objectContaining(tooltipProps));
    });

    it('should render children only when disableTooltip is true', () => {
      hotkeyWraper.setProps({ disableTooltip: true });
      expect(hotkeyWraper.find('Tooltip').exists()).toBe(false);
      expect(hotkeyWraper.html()).toEqual('<p>Inner children</p>');
    });
  });

  describe('inner methods', () => {
    describe('setShowTooltip', () => {
      let setStateSpy;
      let setShowTooltip;

      beforeEach(() => {
        setStateSpy = jest.spyOn(hotkeyWraper.instance(), 'setState');
        setShowTooltip = hotkeyWraper.instance().setShowTooltip;
      });

      afterEach(() => {
        setStateSpy.mockReset();
        setStateSpy.mockRestore();
      });

      it('should call setState when showTooltip is different from the state one', () => {
        setShowTooltip(true);

        expect(hotkeyWraper.state('showTooltip')).toBe(true);
        expect(setStateSpy).toHaveBeenCalledWith({ showTooltip: true });
      });

      it('should not call setState when showTooltip is equal from the state one', () => {
        setShowTooltip(false);

        expect(hotkeyWraper.state('showTooltip')).toBe(false);
        expect(setStateSpy).not.toHaveBeenCalled();
      });
    });
  });

  describe('lifecycle', () => {
    describe('componentDidMount', () => {
      it('should bind hotkey with Mousetrap and call addNewTooltipHelp when disableTooltip is false', () => {
        const { setShowTooltip } = hotkeyWraper.instance();
        expect(helpTooltipHandler.addNewTooltipHelp).toHaveBeenCalledWith(
          '?',
          setShowTooltip,
        );
        expect(MouseTrap.bind).toHaveBeenCalledWith('a', onHotkeyPressed);
      });

      it('should only bind hotkey with Mousetrap when disableTooltip is true', () => {
        helpTooltipHandler.addNewTooltipHelp.mockClear();
        hotkeyWraper = shallow(
          <HotkeyWraper
            hotkey="a"
            onHotkeyPressed={onHotkeyPressed}
            disableTooltip
          >
            <p>Inner children</p>
          </HotkeyWraper>,
        );

        expect(helpTooltipHandler.addNewTooltipHelp).not.toHaveBeenCalled();
        expect(MouseTrap.bind).toHaveBeenCalledWith('a', onHotkeyPressed);
      });
    });

    describe('componentWillReceiveProps', () => {
      let setShowTooltip;

      beforeEach(() => {
        setShowTooltip = hotkeyWraper.instance().setShowTooltip;

        helpTooltipHandler.addNewTooltipHelp.mockClear();
        helpTooltipHandler.removeToolTipHelp.mockClear();

        MouseTrap.bind.mockClear();
        MouseTrap.unbind.mockClear();
      });

      describe('when disableTooltip has changed', () => {
        it('should call removeToolTipHelp when disableToltip is true', () => {
          hotkeyWraper.setProps({ disableTooltip: true });

          expect(helpTooltipHandler.removeToolTipHelp).toHaveBeenCalledWith(
            '?',
            setShowTooltip,
          );
          expect(helpTooltipHandler.addNewTooltipHelp).not.toHaveBeenCalled();
        });

        it('should call addNewTooltipHelp when disableToltip is false', () => {
          hotkeyWraper.setProps({ disableTooltip: true });
          helpTooltipHandler.addNewTooltipHelp.mockClear();
          helpTooltipHandler.removeToolTipHelp.mockClear();

          hotkeyWraper.setProps({ disableTooltip: false });

          expect(helpTooltipHandler.addNewTooltipHelp).toHaveBeenCalledWith(
            '?',
            setShowTooltip,
          );
          expect(helpTooltipHandler.removeToolTipHelp).not.toHaveBeenCalled();
        });
      });

      describe('when tooltipHotkey has changed', () => {
        it('should do nothing when disableTooltip is true', () => {
          hotkeyWraper.setProps({ disableTooltip: true });
          helpTooltipHandler.addNewTooltipHelp.mockClear();
          helpTooltipHandler.removeToolTipHelp.mockClear();

          hotkeyWraper.setProps({ disableTooltip: true, tooltipHotkey: 'h' });

          expect(helpTooltipHandler.removeToolTipHelp).not.toHaveBeenCalled();
          expect(helpTooltipHandler.addNewTooltipHelp).not.toHaveBeenCalled();
        });

        it('should remove current tooltipHotkey and add new one when disableTooltip is false', () => {
          hotkeyWraper.setProps({ disableTooltip: false, tooltipHotkey: 'h' });

          expect(helpTooltipHandler.removeToolTipHelp).toHaveBeenCalledWith(
            '?',
            setShowTooltip,
          );
          expect(helpTooltipHandler.addNewTooltipHelp).toHaveBeenCalledWith(
            'h',
            setShowTooltip,
          );
        });
      });

      it('should unbind current hotkey and bind the new one when hotkey has changed', () => {
        hotkeyWraper.setProps({ hotkey: 'b' });

        expect(MouseTrap.unbind).toHaveBeenCalledWith('a');
        expect(MouseTrap.bind).toHaveBeenCalledWith('b', onHotkeyPressed);
      });
    });

    describe('componentWillUnmount', () => {
      it('should unbind hotkey with Mousetrap and call removeToolTipHelp when disableTooltip is false', () => {
        const { setShowTooltip } = hotkeyWraper.instance();
        hotkeyWraper.unmount();

        expect(helpTooltipHandler.removeToolTipHelp).toHaveBeenCalledWith(
          '?',
          setShowTooltip,
        );
        expect(MouseTrap.unbind).toHaveBeenCalledWith('a');
      });

      it('should only unbind hotkey with Mousetrap when disableTooltip is true', () => {
        hotkeyWraper = shallow(
          <HotkeyWraper
            hotkey="a"
            onHotkeyPressed={onHotkeyPressed}
            disableTooltip
          >
            <p>Inner children</p>
          </HotkeyWraper>,
        );

        hotkeyWraper.unmount();

        expect(helpTooltipHandler.removeToolTipHelp).not.toHaveBeenCalled();
        expect(MouseTrap.unbind).toHaveBeenCalledWith('a');
      });
    });
  });
});
