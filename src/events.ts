import mousetrap from 'mousetrap';

export const bindCombination = (
  combination: string,
  cb: (...args: any) => any,
  hold?: boolean,
) => {
  if (hold) {
    mousetrap.bindGlobal(combination, cb(true), 'keydown');
    mousetrap.bindGlobal(combination, cb(false), 'keyup');
    return;
  }

  mousetrap.bindGlobal(combination, cb);
};

export const unbindCombination = (combination: string, hold?: boolean) => {
  if (hold) {
    mousetrap.unbind(combination, 'keydown');
    mousetrap.unbind(combination, 'keyup');
    return;
  }

  mousetrap.unbind(combination);
};
