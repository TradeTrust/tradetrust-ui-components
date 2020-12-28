import React, { ReactElement } from "react";
import { Input, InputError, InputDefault, InputEditableAssetTitle } from "./Input";

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

export const EditableAssetTitle = (): ReactElement => {
  return <InputEditableAssetTitle hasError={false} />;
};

export const EditableAssetTitleError = (): ReactElement => {
  return <InputEditableAssetTitle hasError={true} />;
};

export const TextError = (): ReactElement => {
  return <InputError>Some Error Occurred</InputError>;
};
