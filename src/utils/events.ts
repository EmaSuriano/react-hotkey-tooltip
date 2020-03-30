import mousetrap from 'mousetrap';

export type Handler = (event: Event) => void;

export const bindHoldCombination = (
  combination: string,
  cb: (pressed: boolean) => Handler,
) => {
  mousetrap.bindGlobal(combination, cb(true), 'keydown');
  mousetrap.bindGlobal(combination, cb(false), 'keyup');
};

export const bindCombination = (combination: string, cb: Handler) => {
  mousetrap.bindGlobal(combination, cb);
};

export const unbindHoldCombination = (combination: string) => {
  mousetrap.unbind(combination, 'keydown');
  mousetrap.unbind(combination, 'keyup');
};

export const unbindCombination = (combination: string) => {
  mousetrap.unbind(combination);
};
