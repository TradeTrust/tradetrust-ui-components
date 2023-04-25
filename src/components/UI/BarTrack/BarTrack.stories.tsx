import React, { FunctionComponent } from "react";
import { BarTrack } from "./BarTrack";

export default {
  title: "UI/BarTrack",
  component: BarTrack,
  parameters: {
    componentSubtitle: "BarTrack.",
  },
};

export const BarTrackStart: FunctionComponent = () => <BarTrack progress={0} />;
export const BarTrackProgress: FunctionComponent = () => (
  <BarTrack progress={0.33} />
);
export const BarTrackComplete: FunctionComponent = () => (
  <BarTrack progress={1} />
);
