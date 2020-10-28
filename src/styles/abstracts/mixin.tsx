import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.js";
const fullConfig = resolveConfig(tailwindConfig);
import { vars } from "../index";

export const fontSourcesansproRegular = (): string => {
  return `
    font-family: ${fullConfig.theme.fontFamily.body.join(", ")};
    font-weight: ${fullConfig.theme.fontWeight.regular};
  `;
};

export const fontSourcesansproBold = (): string => {
  return `
    font-family: ${fullConfig.theme.fontFamily.body.join(", ")};
    font-weight: ${fullConfig.theme.fontWeight.bold};
  `;
};

const pxToRem = (size: number, base = 16): string => {
  return (size / base) * 1 + "rem";
};

export const fontSize = (size = 16): string => {
  return `
    font-size: ${size}px;
    font-size: ${pxToRem(size)};
  `;
};

interface LoaderSpinnerProps {
  w?: string;
  borderW?: string;
  spd?: string;
  primary?: string;
  secondary?: string;
}

export const loaderSpinner = ({
  w = "24px",
  borderW = "4px",
  spd = "0.9s",
  primary = vars.white,
  secondary = vars.white,
}: LoaderSpinnerProps): string => {
  return `
    width: ${w};
    height: ${w};
    padding: 0;
    border-radius: 50%;
    border-style: solid;
    border-width: ${borderW};
    border-top-color: ${primary};
    border-left-color: ${secondary};
    border-bottom-color: ${secondary};
    border-right-color: ${secondary};
    animation: spinning ${spd} linear infinite;
  `;
};

export const baseStyleInput = (): string => {
  return `
    border: 1px solid ${vars.greyLight};
    padding: ${vars.inputPadding};
    margin-bottom: 10px;

    &[type="text"],
    &[type="email"] {
      width: 100%;
    }

    &::placeholder {
      font-style: italic;
      color: ${vars.grey};
      ${fontSize(16)}
    }
  `;
};
