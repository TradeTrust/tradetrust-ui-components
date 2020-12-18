import React from "react";

import { Button, ButtonIcon } from "./Button";
import { Edit3, X, Printer, Book } from "react-feather";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    componentSubtitle: "Button, ButtonIcon.",
  },
};

export const SolidDefault = (): React.ReactNode => {
  return <Button>SolidDefault</Button>;
};

export const SolidDisabled = (): React.ReactNode => {
  return <Button disabled>SolidDisabled</Button>;
};

export const SolidOrangeWhite = (): React.ReactNode => {
  return <Button className="bg-orange text-white hover:bg-orange-600">SolidOrangeWhite</Button>;
};

export const SolidWhiteOrange = (): React.ReactNode => {
  return <Button className="bg-white text-orange hover:bg-grey-100">SolidWhiteOrange</Button>;
};

export const SolidWhiteBlue = (): React.ReactNode => {
  return <Button className="bg-white text-blue hover:bg-grey-100">SolidWhiteBlue</Button>;
};

export const SolidRedWhite = (): React.ReactNode => {
  return <Button className="bg-red text-white hover:bg-red-400">SolidRedWhite</Button>;
};

export const SolidWhiteGrey = (): React.ReactNode => {
  return <Button className="bg-white text-grey hover:bg-grey-100">SolidWhiteGrey</Button>;
};

export const SolidGreenWhite = (): React.ReactNode => {
  return <Button className="bg-green text-white hover:bg-green-600">SolidGreenWhite</Button>;
};

export const BorderedBlue = (): React.ReactNode => {
  return <Button className="bg-white text-blue border-blue hover:bg-grey-100">BorderedBlue</Button>;
};

export const IconWhiteOrange = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-grey-100">
      <Edit3 className="text-orange" />
    </ButtonIcon>
  );
};

export const IconWhiteOrangeDisabled = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-grey-100" disabled>
      <Edit3 className="text-orange" />
    </ButtonIcon>
  );
};

export const IconWhiteBlue = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-grey-100">
      <Printer className="text-blue" />
    </ButtonIcon>
  );
};

export const IconOrangeWhite = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-orange hover:bg-orange-600">
      <Book className="text-white" />
    </ButtonIcon>
  );
};

export const IconCircle = (): React.ReactNode => {
  return (
    <ButtonIcon className="rounded-full bg-grey-300 hover:bg-grey">
      <X />
    </ButtonIcon>
  );
};
