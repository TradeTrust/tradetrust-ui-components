import css, { SerializedStyles } from "@emotion/css";
import resolveConfig from "tailwindcss/resolveConfig";
import tw from "twin.macro";
import tailwindConfig from "../../tailwind.js";

const fullConfig = resolveConfig(tailwindConfig);

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
  primary = `${fullConfig.theme.colors.white.default}`,
  secondary = `${fullConfig.theme.colors.white.default}`,
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

export const baseStyleInput = (): SerializedStyles => {
  return css`
    ${tw`border border-solid border-grey-300`}
    padding: 5px 10px;
    margin-bottom: 10px;

    &[type="text"],
    &[type="email"] {
      width: 100%;
    }

    &::placeholder {
      ${tw`italic text-grey`}
      ${fontSize(16)}
    }
  `;
};

export const aspectRatio = (width = 16, height = 9): string => {
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

interface loaderSkeletonProps {
  w: string;
  h: string;
  bg: string;
  loaderBg: string;
  loaderW: string;
}

export const loaderSkeleton = ({
  w = "260px",
  h = "24px",
  bg = `${fullConfig.theme.colors.grey[`200`]}`,
  loaderBg = `${fullConfig.theme.colors.grey[`100`]}`,
  loaderW = "50%",
}: loaderSkeletonProps): string => {
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

export const centerVertical = (): string => {
  return `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
};
