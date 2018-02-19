import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif'],
  },
});

ReactDOM.render(<Demo />, document.querySelector('#demo'));
