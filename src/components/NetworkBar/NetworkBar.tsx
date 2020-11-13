import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { vars } from "../../styles";

const NetworkWrap = styled.div`
  background-color: ${vars.greenDarker};
  color: ${vars.white};
  padding: 8px 0;

  .network {
    text-transform: capitalize;
  }

  svg {
    cursor: pointer;

    &:hover {
      color: ${vars.grey};
    }
  }
`;

export interface NetworkBarProps {
  network?: string;
}

export const NetworkBar: React.FunctionComponent<NetworkBarProps> = ({ network }: NetworkBarProps) => {
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
    <NetworkWrap data-testid="network-bar">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="col-auto ml-auto">
            <p className="mb-0">
              You are currently on <span className="network">{network}</span> network. To change it, please upload a new
              config file.
            </p>
          </div>
          <div className="col-auto ml-auto">
            <X data-testid="network-bar-close" onClick={() => setShow(false)} />
          </div>
        </div>
      </div>
    </NetworkWrap>
  );
};
