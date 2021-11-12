import React, { FunctionComponent } from "react";
import { Alert } from "./Alert";

export default {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    componentSubtitle: "Alert.",
  },
};

export const AlertWarning: FunctionComponent = () => (
  <Alert
    type="warning"
    message={
      "You see this template because the certificate issuer misconfigured the template configuration of your document. Please check with the certificate issuer. More information is available in the documentation"
    }
  />
);
