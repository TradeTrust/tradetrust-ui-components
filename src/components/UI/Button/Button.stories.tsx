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
  return <Button className="bg-secondary text-white hover:bg-secondary-600">SolidOrangeWhite</Button>;
};

export const SolidWhiteOrange = (): React.ReactNode => {
  return <Button className="bg-white text-secondary hover:bg-gray-50">SolidWhiteOrange</Button>;
};

export const SolidWhiteBlue = (): React.ReactNode => {
  return <Button className="bg-white text-primary-500 hover:bg-gray-50">SolidWhiteBlue</Button>;
};

export const SolidRedWhite = (): React.ReactNode => {
  return <Button className="bg-error-400 text-white hover:bg-red-400">SolidRedWhite</Button>;
};

export const SolidWhiteGrey = (): React.ReactNode => {
  return <Button className="bg-white text-gray-500 hover:bg-gray-50">SolidWhiteGrey</Button>;
};

export const SolidGreenWhite = (): React.ReactNode => {
  return <Button className="bg-success-500 text-white hover:bg-success-700">SolidGreenWhite</Button>;
};

export const BorderedBlue = (): React.ReactNode => {
  return <Button className="bg-white text-primary-500 border-primary-500 hover:bg-gray-50">BorderedBlue</Button>;
};

export const IconWhiteOrange = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-gray-50">
      <Edit3 className="text-secondary" />
    </ButtonIcon>
  );
};

export const IconWhiteOrangeDisabled = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-gray-50" disabled>
      <Edit3 className="text-secondary" />
    </ButtonIcon>
  );
};

export const IconWhiteBlue = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-gray-50">
      <Printer className="text-primary-500" />
    </ButtonIcon>
  );
};

export const IconOrangeWhite = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-secondary hover:bg-secondary-600">
      <Book className="text-white" />
    </ButtonIcon>
  );
};

export const IconCircle = (): React.ReactNode => {
  return (
    <ButtonIcon className="rounded-full bg-gray-300 hover:bg-gray-500">
      <X />
    </ButtonIcon>
  );
};
