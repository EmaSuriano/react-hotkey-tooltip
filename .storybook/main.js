module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-notes/register-panel'],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
        { loader: require.resolve('react-docgen-typescript-loader') },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
