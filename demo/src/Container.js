import HotkeyWrapper from '../../src';
import React, { Component } from 'react';
import {
  WhyYouShouldUseIt,
  BuiltWith,
  Installation,
  InAction,
  Props,
  License,
} from './sections';

const Container = () => (
  <div className="container">
    <WhyYouShouldUseIt />
    <BuiltWith />
    <Installation />
    <InAction />
    <Props />
    <License />
  </div>
);

export default Container;
