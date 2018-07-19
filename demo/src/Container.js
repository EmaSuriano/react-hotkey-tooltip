import React, { Component } from 'react';
import HotkeyWrapper from '../../src';
import {
  WhyShouldIUseIt,
  BuiltWith,
  Installation,
  InAction,
  Props,
  License,
} from './sections';

const Container = () => (
  <div className="container">
    <WhyShouldIUseIt />
    <BuiltWith />
    <Installation />
    <InAction />
    <Props />
    <License />
  </div>
);

export default Container;
