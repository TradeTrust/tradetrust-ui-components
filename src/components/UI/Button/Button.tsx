import styled from "@emotion/styled";
import React, { FunctionComponent, AnchorHTMLAttributes, ButtonHTMLAttributes, LabelHTMLAttributes } from "react";

const ButtonWithSvg = styled.button`
  width: 40px;
  height: 40px;

  svg {
    max-width: 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface GetSharedStylesButton {
  padding: string;
}

const getSharedStylesButton = (shared: GetSharedStylesButton): string => {
  const { padding } = shared;

  return `transition-colors duration-200 ease-out cursor-pointer font-bold rounded-lg border border-transparent ${padding}`;
};

export enum Size {
  SM = "py-1 px-2",
  MD = "p-2",
  L = "p-3",
}

export interface ButtonTradeTrust extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

interface AnchorTradeTrust extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: Size;
}

interface LabelTradeTrust extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: Size;
}

export const Button: FunctionComponent<ButtonTradeTrust> = ({
  className,
  children,
  disabled,
  size = Size.MD,
  ...props
}) => {
  const shared = getSharedStylesButton({ padding: size });

  return (
    <button
      className={`${shared} ${className} ${
        disabled ? "cursor-not-allowed bg-gray-200 text-white hover:bg-gray-200" : ""
      }`}
      type="submit"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonIcon: FunctionComponent<ButtonTradeTrust> = ({
  className,
  children,
  disabled,
  size = Size.MD,
  ...props
}) => {
  const shared = getSharedStylesButton({ padding: size });

  return (
    <ButtonWithSvg
      className={`${shared} ${className} ${
        disabled && "cursor-not-allowed bg-gray-50 text-gray-300 hover:bg-gray-200"
      }`}
      type="submit"
      disabled={disabled}
      {...props}
    >
      {children}
    </ButtonWithSvg>
  );
};

export const LinkButton: FunctionComponent<AnchorTradeTrust> = ({ className, children, size = Size.MD, ...props }) => {
  const shared = getSharedStylesButton({ padding: size });

  return (
    <a className={`block ${shared} ${className}`} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export const LabelButton: FunctionComponent<LabelTradeTrust> = ({ className, children, size = Size.MD, ...props }) => {
  const shared = getSharedStylesButton({ padding: size });

  return (
    <label className={`block ${shared} ${className}`} {...props}>
      {children}
    </label>
  );
};
