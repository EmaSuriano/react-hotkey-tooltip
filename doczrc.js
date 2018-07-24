import { css } from 'docz-plugin-css';

export default {
  plugins: [
    css({
      preprocessor: 'postcss',
    }),
  ],
  themeConfig: {
    mode: 'light',
  },
  hashRouter: true,
};
