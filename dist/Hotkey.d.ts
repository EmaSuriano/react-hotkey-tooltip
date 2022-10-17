import React from 'react';
import { Handler } from './utils';
export declare type Props = {
    /** Disabled all Hotkey and Tooltip */
    disabled?: boolean;
    /** Your React component to wrap */
    children: React.ReactElement;
    /** Key combination to trigger the tooltips */
    combination: string;
    /** Action to trigger when the hotkey is pressed */
    onPress: string | Handler;
};
/**
 * Component responsible for positioning the tooltip in the application and calling the action
 */
export declare const Hotkey: ({ disabled, children, combination, onPress }: Props) => JSX.Element;
