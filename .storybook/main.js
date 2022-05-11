const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-postcss"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules,
      },
      // https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
        },
      },
      plugins: [
        ...config.plugins,
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "../src/static/fonts"),
              to: "../docs/static/fonts",
            },
          ],
        }),
      ],
    };
  },
};
