import React from "react";
import { Book, Edit3, Printer, X } from "react-feather";
import { Button, ButtonIcon } from "./Button";

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
  return <Button className="bg-orange-500 text-white hover:bg-orange-600">SolidOrangeWhite</Button>;
};

export const SolidWhiteOrange = (): React.ReactNode => {
  return <Button className="bg-white text-orange-500 hover:bg-grey-100">SolidWhiteOrange</Button>;
};

export const SolidWhiteBlue = (): React.ReactNode => {
  return <Button className="bg-white text-blue-500 hover:bg-grey-100">SolidWhiteBlue</Button>;
};

export const SolidRedWhite = (): React.ReactNode => {
  return <Button className="bg-red-500 text-white hover:bg-red-400">SolidRedWhite</Button>;
};

export const SolidWhiteGrey = (): React.ReactNode => {
  return <Button className="bg-white text-grey-500 hover:bg-grey-100">SolidWhiteGrey</Button>;
};

export const SolidGreenWhite = (): React.ReactNode => {
  return <Button className="bg-green-500 text-white hover:bg-green-600">SolidGreenWhite</Button>;
};

export const BorderedBlue = (): React.ReactNode => {
  return <Button className="bg-white text-blue-500 border-blue-500 hover:bg-grey-100">BorderedBlue</Button>;
};

export const IconWhiteOrange = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-grey-100">
      <Edit3 className="text-orange-500" />
    </ButtonIcon>
  );
};

export const IconWhiteOrangeDisabled = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-grey-100" disabled>
      <Edit3 className="text-orange-500" />
    </ButtonIcon>
  );
};

export const IconWhiteBlue = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-grey-100">
      <Printer className="text-blue-500" />
    </ButtonIcon>
  );
};

export const IconOrangeWhite = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-orange-500 hover:bg-orange-600">
      <Book className="text-white" />
    </ButtonIcon>
  );
};

export const IconCircle = (): React.ReactNode => {
  return (
    <ButtonIcon className="rounded-full bg-grey-300 hover:bg-grey-500">
      <X />
    </ButtonIcon>
  );
};
