import type { StorybookConfig } from "@storybook/react-webpack5";
import CopyPlugin from "copy-webpack-plugin";
import * as path from "path";
import custom from "../webpack.config.ts";
const toPath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-styling-webpack",
    "@chromatic-com/storybook"
  ],
  core: {
    disableTelemetry: true,
  },
  webpackFinal: (config: any) => {
    return {
      ...config,
      // https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
        fallback: {
          ...config.resolve.fallback,
          ...custom.resolve?.fallback,
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
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
