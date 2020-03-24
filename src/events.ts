import mousetrap from 'mousetrap';

// export const debounce = <F extends (...args: any[]) => any>(
//   func: F,
//   waitFor: number,
// ) => {
//   let timeout: number;

//   const debounced = (...args: any[]) => {
//     clearTimeout(timeout);
//     timeout = window.setTimeout(() => func(...args), waitFor);
//   };

//   return debounced as (...args: Parameters<F>) => ReturnType<F>;
// };

// export const throttle = <F extends (...args: any[]) => any>(
//   func: F,
//   waitFor: number,
// ) => {
//   let inThrottle: boolean;

//   return (...args: any[]) => {
//     if (!inThrottle) {
//       inThrottle = true;
//       func(...args);
//       window.setTimeout(() => (inThrottle = false), waitFor);
//     }
//   };
// };

export const bindCombination = (
  combination: string,
  cb: (...args: any) => any,
  hold?: boolean,
) => {
  if (hold) {
    mousetrap.bind(combination, cb(true), 'keydown');
    mousetrap.bind(combination, cb(false), 'keyup');
    return;
  }

  mousetrap.bind(combination, cb);
};

export const unbindCombination = (combination: string, hold?: boolean) => {
  if (hold) {
    mousetrap.unbind(combination, 'keydown');
    mousetrap.unbind(combination, 'keyup');
    return;
  }

  mousetrap.unbind(combination);
};
