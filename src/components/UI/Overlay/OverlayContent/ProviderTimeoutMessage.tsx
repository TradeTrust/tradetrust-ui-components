import React, { FunctionComponent } from "react";
import { ConfirmationContext, DismissalButton, MESSAGE_TYPE } from "./ConfirmationMessage";

interface ProviderTimeoutMessageProps {
  address: string;
}

export const ProviderTimeoutMessage: FunctionComponent<ProviderTimeoutMessageProps> = ({address}) => {
  return <ConfirmationContext messageType={MESSAGE_TYPE.WARNING}>
    <p className="text-cloud-800">
      Loading the endorsement chain is taking longer than usual. To address
      this, <a href={address} target="_blank">change your Remote Procedure Call (RPC) provider</a>.
    </p>
    <DismissalButton />
  </ConfirmationContext>
};
