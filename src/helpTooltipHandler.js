import MouseTrap from 'mousetrap';

const hotkeysTooltip = {};

const addNewTooltipHelp = (hotkey, showTooltipFunc) => {
  if (!hotkeysTooltip[hotkey]) {
    hotkeysTooltip[hotkey] = [];
    MouseTrap.bind(hotkey, callHandlers(hotkey, true), 'keydown');
    MouseTrap.bind(hotkey, callHandlers(hotkey, false), 'keyup');
  }

  hotkeysTooltip[hotkey].push(showTooltipFunc);
};

const removeToolTipHelp = (hotkey, showTooltipFunc) => {
  const index = hotkeysTooltip[hotkey].indexOf(showTooltipFunc);

  if (index > -1) {
    hotkeysTooltip[hotkey].splice(index, 1);
  }
};

const callHandlers = (hotkey, showTooltip) => () =>
  hotkeysTooltip[hotkey].forEach(func => func(showTooltip));

export { addNewTooltipHelp, removeToolTipHelp };
