import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'typeface-roboto';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const CenterContainer = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '20px',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

addDecorator((storyFn) => <CenterContainer>{storyFn()}</CenterContainer>);

addDecorator(withInfo);
