import React from 'react';

const { Consumer, Provider } = React.createContext({
  showTooltip: false,
});

export { Consumer, Provider };
