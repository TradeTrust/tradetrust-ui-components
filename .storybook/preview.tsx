import type { Preview } from "@storybook/react";
import React from "react";
import { convert, ThemeProvider, themes } from 'storybook/internal/theming';
import "./styles.css";

const preview: Preview = {
  decorators: [
    (story) => (
      // https://github.com/storybookjs/storybook/issues/29313#issuecomment-2403915357
      // @ts-ignore
      <ThemeProvider theme={convert(themes.light)}>{story()}</ThemeProvider>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
  },

  tags: ["autodocs"]
};

export default preview;
