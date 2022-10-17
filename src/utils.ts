import mousetrap from 'mousetrap';

export type Handler = (event: KeyboardEvent) => void;

export const bindHoldCombination = (
  combination: string,
  cb: (pressed: boolean) => Handler,
) => {
  mousetrap.bind(combination, cb(true), 'keydown');
  mousetrap.bind(combination, cb(false), 'keyup');
  return;
};

export const bindCombination = (combination: string, cb: Handler) => {
  mousetrap.bind(combination, cb);
  return;
};

export const unbindHoldCombination = (combination: string) => {
  mousetrap.unbind(combination, 'keydown');
  mousetrap.unbind(combination, 'keyup');
  return;
};

export const unbindCombination = (combination: string) => {
  mousetrap.unbind(combination);
  return;
};
