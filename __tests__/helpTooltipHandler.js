import {
  addNewTooltipHelp,
  removeToolTipHelp,
} from '../src/helpTooltipHandler';
import MouseTrap from 'mousetrap';

jest.mock('mousetrap', () => ({
  bind: jest.fn(),
  unbind: jest.fn(),
}));

describe('helpTooltipHandler', () => {
  describe('addNewTooltipHelp', () => {
    beforeEach(() => {
      MouseTrap.bind.mockClear();
    });

    it('should bind hotkey with MouseTrap when hotkey does not exists inside hotkeysTooltip', () => {
      const showTooltipSpy = jest.fn();
      addNewTooltipHelp('a', showTooltipSpy);

      expect(MouseTrap.bind.mock.calls.length).toBe(2);

      const [firstCall, secondCall] = MouseTrap.bind.mock.calls;
      expect(firstCall[0]).toBe('a');
      expect(firstCall[2]).toBe('keydown');

      expect(secondCall[0]).toBe('a');
      expect(secondCall[2]).toBe('keyup');
    });

    it('should add showTooltip function to hotkeysTooltip when hotkey exists inside hotkeysTooltip', () => {
      const showTooltipSpy = jest.fn();
      addNewTooltipHelp('a', showTooltipSpy);

      expect(MouseTrap.bind).not.toHaveBeenCalled();
    });
  });

  describe('removeTooltipHelp', () => {
    it('should remove showTooltip function from hotkeysTooltip if it exists', () => {});

    it('should not change hotkeysTooltip when showTooltip function does not exists in it', () => {});
  });
});
