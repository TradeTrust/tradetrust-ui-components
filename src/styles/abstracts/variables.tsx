// If you update anything here, please update tailwind.js file too. Since we are using tailwind and emotion style component together.
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.js";
const fullConfig = resolveConfig(tailwindConfig);

export const brandOrange = `${fullConfig.theme.colors.brandOrange.default}`;
export const brandBlue = `${fullConfig.theme.colors.brandBlue.default}`;
export const brandNavy = `${fullConfig.theme.colors.brandNavy.default}`;

export const grey = `${fullConfig.theme.colors.grey.default}`;
export const greyDark = `${fullConfig.theme.colors.grey.dark}`;
export const greyDarker = `${fullConfig.theme.colors.grey.darker}`;
export const greyLight = `${fullConfig.theme.colors.grey.light}`;
export const greyLighter = `${fullConfig.theme.colors.grey.lighter}`;
export const greyLightest = `${fullConfig.theme.colors.grey.lightest}`;

export const greyblue = `${fullConfig.theme.colors.white.default}`;
export const greyblueDark = `${fullConfig.theme.colors.black.dark}`;
export const greyblueDarker = `${fullConfig.theme.colors.navy.darker}`;

export const blue = `${fullConfig.theme.colors.blue.default}`;
export const blueLight = `${fullConfig.theme.colors.blue.light}`;
export const blueLighter = `${fullConfig.theme.colors.blue.lighter}`;
export const blueLightest = `${fullConfig.theme.colors.blue.lightest}`;
export const blueDark = `${fullConfig.theme.colors.blue.dark}`;

export const navy = `${fullConfig.theme.colors.navy.default}`;

export const orange = `${fullConfig.theme.colors.orange.default}`;
export const orangeDark = `${fullConfig.theme.colors.orange.dark}`;
export const orangeLighter = `${fullConfig.theme.colors.orange.lighter}`;

export const green = `${fullConfig.theme.colors.green.default}`;
export const greenLighter = `${fullConfig.theme.colors.green.lighter}`;
export const greenLightest = `${fullConfig.theme.colors.green.lightest}`;
export const greenDark = `${fullConfig.theme.colors.green.dark}`;
export const greenDarker = `${fullConfig.theme.colors.green.darker}`;

export const teal = `${fullConfig.theme.colors.teal.default}`;
export const tealLighter = `${fullConfig.theme.colors.teal.lighter}`;

export const pink = `${fullConfig.theme.colors.pink.default}`;

export const red = `${fullConfig.theme.colors.red.default}`;
export const redDark = `${fullConfig.theme.colors.red.dark}`;
export const redLighter = `${fullConfig.theme.colors.red.lighter}`;

export const white = `${fullConfig.theme.colors.white.default}`;

export const black = `${fullConfig.theme.colors.black.default}`;

export const offblack = `${fullConfig.theme.colors.offblack.default}`;

export const buttonRadius = "4px";
export const buttonOutline = navy;
export const roundButtonOutline = navy;

export const easeInCubic = "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
export const easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";
export const easeInOutCubic = "cubic-bezier(0.645, 0.045, 0.355, 1)";

export const maxWidth = "1280px";
export const inputPadding = "5px 10px";
export const dropzoneBoxshadowPadding = "10px";

export const sm = `${fullConfig.theme.screens.sm}`;
export const md = `${fullConfig.theme.screens.md}`;
export const lg = `${fullConfig.theme.screens.lg}`;
export const xl = `${fullConfig.theme.screens.xl}`;
