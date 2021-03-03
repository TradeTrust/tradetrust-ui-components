import React from "react";
import { ColorPalette, ColorItem } from "@storybook/addon-docs/blocks";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./../tailwind.js";
const fullConfig = resolveConfig(tailwindConfig);

export default {
  title: "Styleguide",
  parameters: {
    componentSubtitle: "Colors.",
    // https://github.com/storybookjs/storybook/issues/12111#issuecomment-679962444
    viewMode: "docs",
    previewTabs: { "storybook/docs/panel": null, canvas: { hidden: true } },
  },
};

type Color = { [key: string]: string };

export const Colors = (): React.ReactNode => {
  // https://v1.tailwindcss.com/docs/customizing-colors#default-color-palette
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { transparent, current, ...colors } = fullConfig.theme.colors; // omit tailwind defaults of transparent and current, they are not really useful in this palatte showcase

  return (
    <ColorPalette>
      {Object.entries(colors).map(([key, value], index) => {
        return <ColorItem key={index} title={`theme.color.${key}`} subtitle={key} colors={value as Color} />;
      })}
    </ColorPalette>
  );
};
