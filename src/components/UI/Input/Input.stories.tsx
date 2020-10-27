import React, { ReactElement } from "react";
import { Input, InputDefault } from "./Input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    componentSubtitle: "Inputs, error state.",
  },
};

export const Default = (): ReactElement => {
  return <InputDefault type="text" name="test" placeholder="Placeholder" />;
};

export const Error = (): ReactElement => {
  return <InputDefault type="text" name="test" placeholder="Placeholder" errorMessage="Some error occurred." />;
};
