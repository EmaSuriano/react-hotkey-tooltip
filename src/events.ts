import mousetrap from 'mousetrap';

export const bindCombination = (
  combination: string,
  cb: (...args: any) => any,
  hold?: boolean,
) => {
  if (hold) {
    mousetrap.bind(combination, cb(true), 'keydown');
    mousetrap.bind(combination, cb(false), 'keypress');
    return;
  }

  mousetrap.bind(combination, cb);
};

export const unbindCombination = (combination: string, hold?: boolean) => {
  if (hold) {
    mousetrap.unbind(combination, 'keydown');
    mousetrap.unbind(combination, 'keypress');
    return;
  }

  mousetrap.unbind(combination);
};
