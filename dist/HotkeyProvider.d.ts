import React from 'react';
import { TippyProps } from '@tippyjs/react';
export declare const KEYBOARD_EVENT: {
    KEY_PRESS: string;
    KEY_DOWN: string;
    KEY_UP: string;
};
declare type Props = {
    /** Disabled all Hotkeys */
    disabled?: boolean;
    /** Options passed to react-tippy */
    tooltipOptions?: TippyProps;
    /** Key combination to trigger the tooltips */
    tooltipCombination?: string;
    /** Your React components */
    children: React.ReactNode;
};
/**
 * The Top wrapper component that handles when to show the Tooltips and globally disabled them.
 * */
export declare const HotkeyProvider: ({ disabled, tooltipOptions, tooltipCombination, children, }: Props) => JSX.Element;
export {};
