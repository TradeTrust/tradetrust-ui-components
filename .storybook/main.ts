import type { StorybookConfig } from "@storybook/react-webpack5";
import CopyPlugin from "copy-webpack-plugin";
import * as path from "path";
import custom from "../webpack.config.ts";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
  ],
  core: {
    disableTelemetry: true,
  },
  webpackFinal: (config: any) => {
    return {
      ...config,
      module: {
        ...config.module,
        // ...custom.module,
        rules: custom.module?.rules,
      },
      // https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
        },
        // fallback: {
        // ...custom.resolve?.fallback
        // }
      },
      plugins: [
        ...config.plugins,
        // ...custom.plugins,
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
  docs: {
    autodocs: true,
  },
};
export default config;
