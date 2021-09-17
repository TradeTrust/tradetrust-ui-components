import React, { FunctionComponent } from "react";

export interface BarTrackProps {
  className?: string;
  progress: number;
}

export const BarTrack: FunctionComponent<BarTrackProps> = ({ className, progress }) => {
  return (
    <div className={`w-full h-1 bg-gray-300${className ? ` ${className}` : ""}`}>
      <div
        data-testid="bar-progress"
        className="h-1 w-full bg-cerulean-500 transition duration-1000 ease-out"
        style={{ width: `${(progress * 100).toFixed(0)}%` }}
      />
    </div>
  );
};
