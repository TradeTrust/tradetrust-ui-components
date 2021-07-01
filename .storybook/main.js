const custom = require("../webpack.config.js");
const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-postcss"],
  typescript: {
    reactDocgen: "react-docgen", // once react-docgen-typescript v2 in included in storybook, remove this config
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
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
