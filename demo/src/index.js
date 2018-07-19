import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import Demo from './Demo';
import V2 from './v2';

WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif'],
  },
});

ReactDOM.render(<V2 />, document.querySelector('#demo'));
