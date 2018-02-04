import MouseTrap from 'mousetrap';

const tooltipList = {};

const addNewTooltipHelp = (shortcut, showTooltip) => {
  if (!tooltipList[shortcut]) {
    tooltipList[shortcut] = [];
    MouseTrap.bind(shortcut, callHandlers(shortcut, true), 'keydown');
    MouseTrap.bind(shortcut, callHandlers(shortcut, false), 'keyup');
  }

  tooltipList[shortcut].push(showTooltip);
};

const removeToolTipHelp = (shortcut, showTooltip) => {
  const index = tooltipList[shortcut].indexOf(showTooltip);

  if (index > -1) {
    tooltipList[shortcut].splice(index, 1);
  }
};

const callHandlers = (tooltipShortcut, showTooltip) => () => {
  const tooltips = tooltipList[tooltipShortcut];
  if (!tooltips) return console.error('No tooltip help define for that key');

  tooltips.forEach(func => func(showTooltip));
};

export { addNewTooltipHelp, removeToolTipHelp };
