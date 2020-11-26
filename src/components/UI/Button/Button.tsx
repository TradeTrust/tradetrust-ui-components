import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ButtonWithSvg = styled.button`
  width: 40px;
  height: 40px;

  svg {
    max-width: 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonClasses = `transition-colors duration-200 ease-out cursor-pointer font-bold p-2 rounded shadow-md border border-transparent`;

export const Button: FunctionComponent<ButtonProps> = ({ className, children, disabled, ...props }) => {
  return (
    <button
      className={`${ButtonClasses} ${className} ${
        disabled ? "cursor-not-allowed bg-grey-200 text-white hover:bg-grey-200" : ""
      }`}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonIcon: FunctionComponent<ButtonProps> = ({ className, children, disabled, ...props }) => {
  return (
    <ButtonWithSvg
      className={`${ButtonClasses} ${className} ${
        disabled && "cursor-not-allowed bg-grey-100 text-grey-300 hover:bg-grey-200"
      }`}
      type="submit"
      {...props}
    >
      {children}
    </ButtonWithSvg>
  );
};
interface LinkButtonProps {
  className?: string;
  children: React.ReactNode;
  href: string;
  target?: string;
  download?: string;
}

export const LinkButton: FunctionComponent<LinkButtonProps> = ({ className, children, ...props }) => {
  return (
    <a className={`block ${ButtonClasses} ${className}`} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export interface LabelButtonProps {
  className?: string;
  children: React.ReactNode;
  htmlFor: string;
}

export const LabelButton: FunctionComponent<LabelButtonProps> = ({ className, children, ...props }) => {
  return (
    <label className={`block ${ButtonClasses} ${className}`} {...props}>
      {children}
    </label>
  );
};
