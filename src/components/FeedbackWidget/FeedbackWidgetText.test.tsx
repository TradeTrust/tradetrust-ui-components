import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FeedbackWidgetText } from "./FeedbackWidgetText";

describe("FeedbackWidgetText", () => {
  it("should show default feedback text", () => {
    render(
      <FeedbackWidgetText
        positiveFeedbackUrl="https://example.com/yes"
        positiveFeedbackHandle={() => {}}
        negativeFeedbackUrl="https://example.com/no"
        negativeFeedbackHandle={() => {}}
      />
    );

    expect(screen.getByText("Is this page helpful?")).toBeInTheDocument();
  });

  it("should show 'yes' feedback text with 'ideas' github url", () => {
    render(
      <FeedbackWidgetText
        positiveFeedbackUrl="https://example.com/yes"
        positiveFeedbackHandle={() => {}}
        negativeFeedbackUrl="https://example.com/no"
        negativeFeedbackHandle={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Yes"));

    expect(
      screen.getByText(
        "Thank you for your feedback. Do leave us a feedback on Github to help us do even better."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Github")).toHaveAttribute(
      "href",
      "https://example.com/yes"
    );
  });

  it("should show 'no' feedback text with 'improvements' github url", () => {
    render(
      <FeedbackWidgetText
        positiveFeedbackUrl="https://example.com/yes"
        positiveFeedbackHandle={() => {}}
        negativeFeedbackUrl="https://example.com/no"
        negativeFeedbackHandle={() => {}}
      />
    );
    fireEvent.click(screen.getByText("No"));

    expect(
      screen.getByText(
        "We are sorry to hear that. Do leave us a feedback on Github to help us do better."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Github")).toHaveAttribute(
      "href",
      "https://example.com/no"
    );
  });
});
