import React from 'react';

const { Consumer, Provider } = React.createContext({
  showTooltip: false,
  disabled: false,
  tooltipOptions: {},
});

export { Consumer, Provider };
