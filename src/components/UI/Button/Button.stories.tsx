import React, { ReactElement } from "react";
import {
  Button,
  ButtonSolid,
  ButtonSolidOrangeWhite,
  ButtonBorderedBlue,
  ButtonSolidWhiteOrange,
  ButtonSolidWhiteBlue,
  ButtonSolidRedWhite,
  ButtonSolidWhiteGrey,
  ButtonSolidGreenWhite,
  ButtonIconWhiteOrange,
  ButtonIconWhiteBlue,
  ButtonIconOrangeWhite,
  ButtonCircleGreylight,
} from "./Button";
import { Edit3, X, Printer, Book } from "react-feather";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    componentSubtitle: "ButtonSolid, ButtonBordered, ButtonIcon, ButtonCircle.",
  },
};

export const Solid = (): ReactElement => {
  return <ButtonSolid>Solid</ButtonSolid>;
};

export const SolidDisabled = (): ReactElement => {
  return <ButtonSolid disabled>SolidDisabled</ButtonSolid>;
};

export const SolidOrangeWhite = (): ReactElement => {
  return <ButtonSolidOrangeWhite>SolidOrangeWhite</ButtonSolidOrangeWhite>;
};

export const SolidWhiteOrange = (): ReactElement => {
  return <ButtonSolidWhiteOrange>WhiteOrange</ButtonSolidWhiteOrange>;
};

export const SolidWhiteBlue = (): ReactElement => {
  return <ButtonSolidWhiteBlue>WhiteBlue</ButtonSolidWhiteBlue>;
};

export const SolidRedWhite = (): ReactElement => {
  return <ButtonSolidRedWhite>RedWhite</ButtonSolidRedWhite>;
};

export const SolidWhiteGrey = (): ReactElement => {
  return <ButtonSolidWhiteGrey>WhiteGrey</ButtonSolidWhiteGrey>;
};

export const SolidGreenWhite = (): ReactElement => {
  return <ButtonSolidGreenWhite>GreenWhite</ButtonSolidGreenWhite>;
};

export const BorderedBlue = (): ReactElement => {
  return <ButtonBorderedBlue>BorderedBlue</ButtonBorderedBlue>;
};

export const IconWhiteOrange = (): ReactElement => {
  return (
    <ButtonIconWhiteOrange>
      <Edit3 />
    </ButtonIconWhiteOrange>
  );
};

export const IconWhiteOrangeDisabled = (): ReactElement => {
  return (
    <ButtonIconWhiteOrange disabled>
      <Edit3 />
    </ButtonIconWhiteOrange>
  );
};

export const IconWhiteBlue = (): ReactElement => {
  return (
    <ButtonIconWhiteBlue>
      <Printer />
    </ButtonIconWhiteBlue>
  );
};

export const IconOrangeWhite = (): ReactElement => {
  return (
    <ButtonIconOrangeWhite>
      <Book />
    </ButtonIconOrangeWhite>
  );
};

export const CircleGreylight = (): ReactElement => {
  return (
    <ButtonCircleGreylight>
      <X />
    </ButtonCircleGreylight>
  );
};
