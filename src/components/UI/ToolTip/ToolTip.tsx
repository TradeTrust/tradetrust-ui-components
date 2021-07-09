import React, { FunctionComponent, useState } from "react";
import { Info } from "react-feather";

export interface ToolTipProps {
  toolTipText?: string;
  iconStyle?: string;
  toolTipStyle?: string;
}

/*
 * Using tooltip
 * @param {string} infoText - Text that will be displayed in the tooltip
 * @param {string} iconStyle - Tailwind styles or CSS class to style the default tooltip icon
 * @param {string} toolTipStyle - Tailwind styles or CSS class to style the popup tooltip box
 */
export const ToolTip: FunctionComponent<ToolTipProps> = ({ toolTipText, iconStyle, children, toolTipStyle }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  const changeCursor = toolTipText ? "cursor-help" : "";

  return (
    <div className={`relative inline-block ${changeCursor}`}>
      <div onMouseEnter={() => setDisplayInfo(true)} onMouseLeave={() => setDisplayInfo(false)}>
        {children ? children : <Info className={`${iconStyle}`} />}
      </div>
      {displayInfo && toolTipText && (
        <div
          className={`absolute -top-1 left-0 transform -translate-y-full bg-white p-4 shadow-md w-72 max-w-xs text-sm border ${toolTipStyle}`}
        >
          {toolTipText}
        </div>
      )}
    </div>
  );
};
