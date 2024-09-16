import type { Preview } from "@storybook/react";
import React from "react";
import "./styles.css";

const preview: Preview = {
  decorators: [(storyFn) => <>{storyFn()}</>],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;