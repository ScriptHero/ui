const {VanillaExtractPlugin} = require('@vanilla-extract/webpack-plugin')

module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, {configType}) => {
    config.plugins.push(new VanillaExtractPlugin())
    return config;
  }
}
