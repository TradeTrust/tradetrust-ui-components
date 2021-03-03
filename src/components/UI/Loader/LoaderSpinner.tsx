import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

export interface LoaderProps {
  className?: string;
  children?: React.ReactNode;
  width?: string;
  primary?: string;
  secondary?: string;
}

const Loader: FunctionComponent<LoaderProps> = ({
  className,
  children,
  width = "24px",
  primary = "#808080",
  secondary = "#d3d3d3",
  ...props
}) => {
  return (
    <div
      className={`spinning ${className}`}
      {...props}
      style={{
        width: width,
        height: width,
        borderTopColor: primary,
        borderLeftColor: secondary,
        borderBottomColor: secondary,
        borderRightColor: secondary,
      }}
    >
      {children}
    </div>
  );
};

export const LoaderSpinner = styled(Loader)`
  padding: 0;
  border-radius: 50%;
  border-style: solid;
  border-width: 4px;
`;
