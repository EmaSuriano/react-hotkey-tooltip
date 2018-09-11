const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: true,
  },
  webpack: {
    aliases: {
      lib: path.resolve('src'),
    },
    html: {
      title: 'React Hotkey Tooltip',
    },
  },
};
