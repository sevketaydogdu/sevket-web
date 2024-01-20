const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { TamaguiPlugin } = require('tamagui-loader')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  return config;
};

config.plugins.push(

  new TamaguiPlugin({

    config: './src/tamagui.config.ts',

    components: ['tamagui'], // matching the yarn add you chose above

  }),

)
 