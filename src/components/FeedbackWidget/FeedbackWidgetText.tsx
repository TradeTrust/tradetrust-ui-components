import React, { useState } from "react";
import { Button, LinkButton } from "../UI/Button";

type Feedback = "yes" | "no" | null;

interface FeedbackWidgetTextProps {
  positiveFeedbackUrl: string;
  positiveFeedbackHandle?: () => void;
  negativeFeedbackUrl: string;
  negativeFeedbackHandle?: () => void;
}

export const FeedbackWidgetText: React.FunctionComponent<
  FeedbackWidgetTextProps
> = ({
  positiveFeedbackUrl,
  positiveFeedbackHandle,
  negativeFeedbackUrl,
  negativeFeedbackHandle,
}) => {
  const [feedback, setFeedback] = useState<Feedback>(null);

  switch (true) {
    case feedback === "yes":
      return (
        <>
          <p>
            Thank you for your feedback. Do leave us a feedback on Github to
            help us do even better.
          </p>
          <div className="mt-4">
            <LinkButton
              className="bg-white text-cerulean-500 hover:bg-gray-50 mx-2 inline-block"
              href={positiveFeedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </LinkButton>
          </div>
        </>
      );
    case feedback === "no":
      return (
        <>
          <p>
            We are sorry to hear that. Do leave us a feedback on Github to help
            us do better.
          </p>
          <div className="mt-4">
            <LinkButton
              className="bg-white text-cerulean-500 hover:bg-gray-50 mx-2 inline-block"
              href={negativeFeedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </LinkButton>
          </div>
        </>
      );
    default:
      return (
        <>
          <p>Is this page helpful?</p>
          <div className="mt-4">
            <Button
              className="bg-white text-cerulean-500 hover:bg-gray-50 mx-2"
              onClick={() => {
                setFeedback("yes");
                if (positiveFeedbackHandle) positiveFeedbackHandle();
              }}
            >
              Yes
            </Button>
            <Button
              className="bg-white text-cerulean-500 hover:bg-gray-50 mx-2"
              onClick={() => {
                setFeedback("no");
                if (negativeFeedbackHandle) negativeFeedbackHandle();
              }}
            >
              No
            </Button>
          </div>
        </>
      );
  }
};
