import React, { FunctionComponent } from "react";
import {
  ConfirmationContext,
  DismissalButton,
  MESSAGE_TYPE,
} from "./ConfirmationMessage";

export const AddResolverConfirmation: FunctionComponent = () => {
  return (
    <ConfirmationContext
      messageType={MESSAGE_TYPE.SUCCESS}
      title="Success"
      btnText="Okay, got it"
    >
      <p className="text-cloud-800">Address successfully added</p>
      <DismissalButton buttonText="Okay, got it" />
    </ConfirmationContext>
  );
};
