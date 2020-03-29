import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { Typography } from '@material-ui/core';
import 'typeface-roboto';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  },
});

const WarningContainer = ({ children }) => (
  <div>
    <Typography variant="h6" align="center">
      ⚠️ In order to make use of the shortcuts please focus the content of the
      story ⚠️
    </Typography>
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
  </div>
);

addDecorator((storyFn) => <WarningContainer>{storyFn()}</WarningContainer>);

addDecorator(withInfo);
