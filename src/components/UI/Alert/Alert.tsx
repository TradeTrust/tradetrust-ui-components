import React, { FunctionComponent } from "react";
import warningIcon from "../../../static/images/Alert/warning.png";

export interface AlertProps {
  message: string;
  type: "warning";
}

export const Alert: FunctionComponent<AlertProps> = ({ message, type }) => {
  let bgColor;
  let icon;

  switch (type) {
    case "warning":
      bgColor = "bg-yellow-50";
      icon = warningIcon;
  }

  return (
    <div
      data-testid="alert"
      className={`w-full items-center flex px-4 py-3 ${bgColor}`}
    >
      <img className="h-14 w-14 mr-8" src={icon} />
      <p>{message}</p>
    </div>
  );
};
