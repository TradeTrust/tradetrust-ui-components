import React from "react";
import { ColorPalette, ColorItem } from "@storybook/addon-docs";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./../tailwind.js";
const fullConfig = resolveConfig(tailwindConfig);

export default {
  title: "StyleGuide",
  parameters: {
    componentSubtitle: "Colors.",
    // https://github.com/storybookjs/storybook/issues/12111#issuecomment-679962444
    viewMode: "docs",
    previewTabs: { "storybook/docs": null, canvas: { hidden: true } },
  },
};

type Color = { [key: string]: string };

export const Colors = (): React.ReactNode => {
  // https://v1.tailwindcss.com/docs/customizing-colors#default-color-palette
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { transparent, current, black, white, inherit, ...colors } =
    fullConfig.theme.colors; // omit tailwind defaults of transparent and current, they are not really useful in this palatte showcase

  const allUsedColors = {
    white: { DEFAULT: white },
    black: { DEFAULT: black },
    cerulean: colors.cerulean,
    tangerine: colors.tangerine,
    lemon: colors.lemon,
    scarlet: colors.scarlet,
    forest: colors.forest,
    cloud: colors.cloud,
  };

  return (
    <ColorPalette>
      {Object.entries(allUsedColors).map(([key, value], index) => {
        return (
          <ColorItem
            key={index}
            title={`theme.colors.${key}`}
            subtitle={key}
            colors={value as Color}
          />
        );
      })}
    </ColorPalette>
  );
};
