import React, { useEffect, useState } from "react";
import { X } from "react-feather";

export interface NetworkBarProps {
  network?: string;
  children: React.ReactNode;
}

export const NetworkBar: React.FunctionComponent<NetworkBarProps> = ({ network, children }: NetworkBarProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (network) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [network]);

  if (!show) return null;
  return (
    <div className="bg-cerulean-800 text-white py-2 px-0" data-testid="network-bar">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="col-auto ml-auto">
            <p className="mb-0">{children}</p>
          </div>
          <div className="col-auto ml-auto cursor-pointer hover:text-gray-500">
            <X data-testid="network-bar-close" onClick={() => setShow(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};
