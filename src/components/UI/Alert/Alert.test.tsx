import { render, screen } from "@testing-library/react";
import React from "react";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("should display progress at start correctly", () => {
    render(
      <Alert
        type="warning"
        message="You see this template because the certificate issuer misconfigured the template configuration of your document. Please check with the certificate issuer. More information is available in the documentation"
      />
    );

    expect(screen.getByTestId("alert")).toHaveClass("bg-yellow-50");
  });
});
