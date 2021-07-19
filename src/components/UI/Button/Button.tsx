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

const sharedStylesButton = `transition-colors duration-200 ease-out cursor-pointer font-bold p-2 rounded shadow-md border border-transparent`;

export const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${sharedStylesButton} ${className} ${
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

export const ButtonIcon: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <ButtonWithSvg
      className={`${sharedStylesButton} ${className} ${
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

export const LinkButton: FunctionComponent<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <a className={`block ${sharedStylesButton} ${className}`} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export const LabelButton: FunctionComponent<LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label className={`block ${sharedStylesButton} ${className}`} {...props}>
      {children}
    </label>
  );
};
