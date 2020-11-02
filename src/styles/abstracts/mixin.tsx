import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.js";
import { vars } from "../index";
const fullConfig = resolveConfig(tailwindConfig);

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

export const aspectRatio = (width = 16, height = 9) => {
  return `
    position: relative;
    width: 100%;

    &::before {
      content: '';
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: ${(height / width) * 100}%;
    }

    &::after {
      content: '';
      display: table;
      clear: both;
    }
  `;
};

export const containerCustom = ({ mwCustom = vars.maxWidth }) => {
  return `
    width: 100%;
    max-width: 100%;
    padding-left: $grid-gutter-width / 2;
    padding-right: $grid-gutter-width / 2;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (min-width: ${vars.sm}) {
      max-width: $mw-sm;
    }

    @media only screen and (min-width: ${vars.md}) {
      max-width: $mw-md;
    }

    @media only screen and (min-width: ${vars.lg}) {
      max-width: $mw-lg;
    }

    @media only screen and (min-width: ${vars.xl}) {
      max-width: ${mwCustom};
    }
  `;
};

export const loaderSkeleton = ({
  w = "260px",
  h = "24px",
  bg = vars.greyLighter,
  loaderBg = vars.greyLightest,
  loaderW = "50%",
}) => {
  return `
    &:empty {
      &::after {
        content: "";
        display: block;
        background-repeat: no-repeat;
        background-color: ${bg};
        background-image: linear-gradient(to left, ${bg} 0%, ${loaderBg} 50%, ${bg} 100%);
        background-size: ${loaderW} 100%;
        width: ${w};
        height: ${h};
        border-radius: 2px;
        animation: skeleton-loading 1.4s infinite;
      }
    }
  `;
};

export const centerVertical = () => {
  return `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
};
