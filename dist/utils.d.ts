export declare type Handler = (event: KeyboardEvent) => void;
export declare const bindHoldCombination: (combination: string, cb: (pressed: boolean) => Handler) => void;
export declare const bindCombination: (combination: string, cb: Handler) => void;
export declare const unbindHoldCombination: (combination: string) => void;
export declare const unbindCombination: (combination: string) => void;
