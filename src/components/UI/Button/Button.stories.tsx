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
  return <Button className="bg-ecstasy-orange text-white hover:bg-ecstasy-orange-600">SolidOrangeWhite</Button>;
};

export const SolidWhiteOrange = (): React.ReactNode => {
  return <Button className="bg-white text-ecstasy-orange hover:bg-gray-50">SolidWhiteOrange</Button>;
};

export const SolidWhiteBlue = (): React.ReactNode => {
  return <Button className="bg-white text-boston-blue-500 hover:bg-gray-50">SolidWhiteBlue</Button>;
};

export const SolidRedWhite = (): React.ReactNode => {
  return <Button className="bg-crimson-red-400 text-white hover:bg-red-400">SolidRedWhite</Button>;
};

export const SolidWhiteGrey = (): React.ReactNode => {
  return <Button className="bg-white text-gray-500 hover:bg-gray-50">SolidWhiteGrey</Button>;
};

export const SolidGreenWhite = (): React.ReactNode => {
  return <Button className="bg-keppel-green-500 text-white hover:bg-keppel-green-700">SolidGreenWhite</Button>;
};

export const BorderedBlue = (): React.ReactNode => {
  return (
    <Button className="bg-white text-boston-blue-500 border-boston-blue-500 hover:bg-gray-50">BorderedBlue</Button>
  );
};

export const IconWhiteOrange = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-gray-50">
      <Edit3 className="text-ecstasy-orange" />
    </ButtonIcon>
  );
};

export const IconWhiteOrangeDisabled = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-gray-50" disabled>
      <Edit3 className="text-ecstasy-orange" />
    </ButtonIcon>
  );
};

export const IconWhiteBlue = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-white hover:bg-gray-50">
      <Printer className="text-boston-blue-500" />
    </ButtonIcon>
  );
};

export const IconOrangeWhite = (): React.ReactNode => {
  return (
    <ButtonIcon className="bg-ecstasy-orange hover:bg-ecstasy-orange-600">
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
