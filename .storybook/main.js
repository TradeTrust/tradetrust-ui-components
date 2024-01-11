const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
    disableTelemetry: true,
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
      ],
    };
  },
};
