// If you update anything here, please update tailwind.js file too. Since we are using tailwind and emotion style component together.
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.js";
const fullConfig = resolveConfig(tailwindConfig);

export const blue = `${fullConfig.theme.colors.blue.default}`;
export const navy = `${fullConfig.theme.colors.navy.default}`;
export const orange = `${fullConfig.theme.colors.orange.default}`;

export const grey100 = `${fullConfig.theme.colors.grey[`100`]}`;
export const grey200 = `${fullConfig.theme.colors.grey[`200`]}`;
export const grey300 = `${fullConfig.theme.colors.grey[`300`]}`;
export const grey = `${fullConfig.theme.colors.grey.default}`;
export const grey700 = `${fullConfig.theme.colors.grey[`700`]}`;
export const grey800 = `${fullConfig.theme.colors.grey[`800`]}`;

export const green900 = `${fullConfig.theme.colors.green[`900`]}`;
export const teal = `${fullConfig.theme.colors.teal.default}`;
export const red = `${fullConfig.theme.colors.red.default}`;

export const white = `${fullConfig.theme.colors.white.default}`;
export const black = `${fullConfig.theme.colors.black.default}`;

export const easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";

export const sm = `${fullConfig.theme.screens.sm}`;
export const md = `${fullConfig.theme.screens.md}`;
export const lg = `${fullConfig.theme.screens.lg}`;
export const xl = `${fullConfig.theme.screens.xl}`;
