module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            // Add your path aliases here
            '@web/*': './**/*.web.tsx',
            '@native/*': './**/*.native.tsx',
          },
        },
      ],
    ],
  };
};
