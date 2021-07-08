import React, { FunctionComponent, useState } from "react";
import { Info } from "react-feather";

export interface MoreInfoProps {
  info?: string;
  className?: string;
  infoStyle?: string;
}

export const MoreInfo: FunctionComponent<MoreInfoProps> = ({ info, className, children, infoStyle }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  const changeCursor = info ? "cursor-help" : "";

  return (
    <div className={`inline-block ${changeCursor}`}>
      <div onMouseEnter={() => setDisplayInfo(true)} onMouseLeave={() => setDisplayInfo(false)}>
        {children ? children : <Info className={`${className}`} />}
      </div>
      {displayInfo && info && (
        <div className={`bg-white p-4 shadow-md max-w-xs text-sm border ${infoStyle}`}>{info}</div>
      )}
    </div>
  );
};
