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
  let callHandlersKeydown;
  let callHandlersKeyup;

  describe('addNewTooltipHelp', () => {
    let callHandlers;

    beforeEach(() => {
      MouseTrap.bind.mockClear();
    });

    it('should bind hotkey with MouseTrap when hotkey does not exists inside hotkeysTooltip', () => {
      const showTooltipSpy = jest.fn();
      addNewTooltipHelp('a', showTooltipSpy);

      const [firstCall, secondCall] = MouseTrap.bind.mock.calls;
      callHandlersKeydown = firstCall[1];
      callHandlersKeyup = secondCall[1];

      expect(MouseTrap.bind.mock.calls.length).toBe(2);
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

    it('should call each function passed after keyup or keydown', () => {
      const showTooltipSpy1 = jest.fn();
      const showTooltipSpy2 = jest.fn();

      addNewTooltipHelp('a', showTooltipSpy1);
      addNewTooltipHelp('a', showTooltipSpy2);

      callHandlersKeydown();
      callHandlersKeyup();
      expect(showTooltipSpy1).toHaveBeenCalledWith(true);
      expect(showTooltipSpy1).toHaveBeenCalledWith(false);

      expect(showTooltipSpy2).toHaveBeenCalledWith(true);
      expect(showTooltipSpy2).toHaveBeenCalledWith(false);
    });
  });

  describe('removeTooltipHelp', () => {
    it('should remove showTooltip function from hotkeysTooltip if it exists', () => {
      const showTooltipSpy1 = jest.fn();

      addNewTooltipHelp('a', showTooltipSpy1);
      removeToolTipHelp('a', showTooltipSpy1);

      callHandlersKeydown();

      expect(showTooltipSpy1).not.toHaveBeenCalled();
    });

    it('should not change hotkeysTooltip when showTooltip function does not exists in it', () => {
      const showTooltipSpy1 = jest.fn();

      addNewTooltipHelp('a', showTooltipSpy1);
      removeToolTipHelp('a', jest.fn());

      callHandlersKeydown();

      expect(showTooltipSpy1).toHaveBeenCalled();
    });
  });
});
