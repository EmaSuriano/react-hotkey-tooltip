import { css } from 'docz-plugin-css';

export default {
  themeConfig: {
    /**
     * Mode
     */
    mode: 'light', // you can use: 'dark' or 'light'
    /**
     * Logo
     */
    // logo: {
    //   src: null,
    //   width: null,
    // },
    /**
     * Colors (depends on select mode)
     */
    // colors: {
    //   white: '#FFFFFF',
    //   grayExtraLight: '#EEF1F5',
    //   grayLight: '#CED4DE',
    //   gray: '#7D899C',
    //   grayDark: '#2D3747',
    //   grayExtraDark: '#1D2330',
    //   dark: '#13161F',
    //   blue: '#0B5FFF',
    //   skyBlue: '#1FB6FF',
    //   /** properties bellow depends on mode select */
    //   primary: colors.blue,
    //   text: colors.dark,
    //   link: colors.blue,
    //   footerText: colors.grayDark,
    //   sidebarBg: colors.grayExtraLight,
    //   sidebarText: colors.dark,
    //   background: colors.white,
    //   border: colors.grayLight,
    //   theadColor: colors.gray,
    //   theadBg: colors.grayExtraLight,
    //   tableColor: colors.dark,
    //   tooltipBg: colors.dark,
    //   tooltipColor: colors.grayExtraLight,
    //   codeBg: colors.grayExtraLight,
    //   codeColor: colors.gray,
    //   preBg: colors.grayExtraLight,
    // },
  },
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      },
    }),
  ],
};
