import MouseTrap from 'mousetrap';

const tooltipList = {};

const addNewTooltipHelp = (hotkey, showTooltip) => {
  if (!tooltipList[hotkey]) {
    tooltipList[hotkey] = [];
    MouseTrap.bind(hotkey, callHandlers(hotkey, true), 'keydown');
    MouseTrap.bind(hotkey, callHandlers(hotkey, false), 'keyup');
  }

  tooltipList[hotkey].push(showTooltip);
};

const removeToolTipHelp = (hotkey, showTooltip) => {
  const index = tooltipList[hotkey].indexOf(showTooltip);

  if (index > -1) {
    tooltipList[hotkey].splice(index, 1);
  }
};

const callHandlers = (hotkey, showTooltip) => () => {
  const tooltips = tooltipList[hotkey];
  if (!tooltips) return console.error('No tooltip help define for that key');

  tooltips.forEach(func => func(showTooltip));
};

export { addNewTooltipHelp, removeToolTipHelp };
