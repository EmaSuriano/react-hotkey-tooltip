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
    it('should bind hotkey with MouseTrap when hotkey does not exists inside hotkeysTooltip', () => {});

    it('should add showTooltip function to hotkeysTooltip when hotkey exists inside hotkeysTooltip', () => {});
  });

  describe('removeTooltipHelp', () => {
    it('should remove showTooltip function from hotkeysTooltip if it exists', () => {});

    it('should not change hotkeysTooltip when showTooltip function does not exists in it', () => {});
  });
});
