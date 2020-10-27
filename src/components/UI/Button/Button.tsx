import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { rgba, lighten, darken } from "polished";
import { mixin, vars } from "../../../styles";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
};

export interface LabelProps {
  children?: React.ReactNode;
  className?: string;
  htmlFor: string;
}

export const Label: FunctionComponent<LabelProps> = ({ children, ...props }) => {
  return <label {...props}>{children}</label>;
};

interface AnchorLinkProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  download?: string;
}

export const AnchorLink: FunctionComponent<AnchorLinkProps> = ({ children, ...props }) => {
  return (
    <a {...props} rel="noopener noreferrer">
      {children}
    </a>
  );
};

interface ReactRouterLinkProps {
  className?: string;
  children?: React.ReactNode;
  to: string;
  large?: boolean;
}

interface BaseStyleButtonProps {
  bgColor: string;
  textColor: string;
}

const baseStyleButton = ({ bgColor, textColor }: BaseStyleButtonProps): string => {
  return `
    ${mixin.fontRobotoBold()}
    ${mixin.fontSize(16)};
    transition: background-color 0.3s ${vars.easeOutCubic}, color 0.3s ${vars.easeOutCubic}, box-shadow 0.3s ${
    vars.easeOutCubic
  };
    display: inline-block;
    vertical-align: middle;
    outline: none;
    border: 0;
    padding: 5px 10px;
    letter-spacing: 0.01rem;
    min-height: 40px;
    cursor: pointer;
    border-radius: ${vars.buttonRadius};
    box-shadow: 0 2px 8px ${rgba(vars.black, 0.15)};
    background-color: ${bgColor};
    color: ${textColor};

    &:hover {
      background-color: ${darken(0.2, bgColor)};
    }

    &[disabled] {
      pointer-events: none;
      box-shadow: none;
      background-color: ${lighten(0.25, bgColor)};
      color: ${lighten(0.25, textColor)};
    }

    p {
      margin-top: 0;
      margin-bottom: 0;
    }

    svg {
      display: block;
      width: 100%;
      max-width: 24px;
    }
  `;
};

interface BgWhiteModifierProps {
  hoverTextColor?: string;
  hoverColor: string;
}

const bgWhiteModifier = ({ hoverTextColor, hoverColor }: BgWhiteModifierProps): string => {
  return `
    &[disabled] {
      background-color: ${darken(0.05, vars.white)};
    }

    &:hover {
      text-decoration: none;
      color: ${hoverTextColor};
      background-color: ${rgba(hoverColor, 0.15)};
    }
  `;
};

const iconButtonStyle = (): string => {
  return `
    width: 40px;
    height: 40px;

    svg {
      max-width: 16px;
      margin-left: auto;
      margin-right: auto;
    }
  `;
};

const bgWhiteTextSecondary = `
  ${baseStyleButton({
    bgColor: vars.white,
    textColor: vars.blue,
  })}

  ${bgWhiteModifier({
    hoverTextColor: vars.blue,
    hoverColor: vars.blue,
  })}
`;

export const ButtonSolid = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.grey,
    textColor: vars.white,
  })}
`;

export const ButtonSolidOrangeWhite = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.brandOrange,
    textColor: vars.white,
  })}
`;

export const ButtonSolidRedWhite = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.red,
    textColor: vars.white,
  })}
`;

export const ButtonSolidWhiteGrey = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.white,
    textColor: vars.grey,
  })}
`;

export const ButtonSolidGreenWhite = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.green,
    textColor: vars.white,
  })}
`;

export const ButtonBorderedBlue = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.white,
    textColor: vars.navy,
  })}

  ${mixin.fontRobotoRegular()}
  border: solid 1px ${vars.navy};

  &:hover {
    background-color: ${vars.navy};
    color: ${vars.white};
  }
`;

export const ButtonSolidWhiteOrange = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.white,
    textColor: vars.brandOrange,
  })}

  ${bgWhiteModifier({
    hoverColor: vars.brandOrange,
  })}
`;

export const ButtonSolidWhiteBlue = styled(Button)`
  ${bgWhiteTextSecondary}
`;

export const ButtonIconWhiteOrange = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.white,
    textColor: vars.brandOrange,
  })}

  ${bgWhiteModifier({
    hoverColor: vars.brandOrange,
  })}

  ${iconButtonStyle()};
`;

export const ButtonIconWhiteBlue = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.white,
    textColor: vars.blue,
  })}

  ${bgWhiteModifier({
    hoverColor: vars.blue,
  })}

  ${iconButtonStyle()};
`;

export const ButtonIconOrangeWhite = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.brandOrange,
    textColor: vars.white,
  })}

  ${bgWhiteModifier({
    hoverColor: vars.brandOrange,
  })}

  ${iconButtonStyle()};
`;

export const ButtonCircleGreylight = styled(Button)`
  ${baseStyleButton({
    bgColor: vars.lightgrey,
    textColor: vars.white,
  })}

  min-height: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  box-shadow: none;

  svg {
    display: flex;
    height: 18px;
    margin-left: auto;
    margin-right: auto;

    line {
      color: ${vars.greyDark};
      stroke-width: 3px;
    }
  }
`;

export const LabelWhiteSecondary = styled(Label)`
  ${bgWhiteTextSecondary}
  margin-bottom: 0;
`;

export const AnchorLinkButtonSolidOrangeWhite = styled(AnchorLink)`
  ${baseStyleButton({
    bgColor: vars.brandOrange,
    textColor: vars.white,
  })} :hover {
    text-decoration: none;
    color: ${vars.white};
  }
`;

export const AnchorLinkButtonSolidWhiteBlue = styled(AnchorLink)`
  ${bgWhiteTextSecondary}
  margin-bottom: 0;
`;
