import React, { FunctionComponent } from "react";

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
      className={`animate-spin ${className}`}
      {...props}
      style={{
        padding: 0,
        borderRadius: "50%",
        borderStyle: "solid",
        borderWidth: 4,
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

export const LoaderSpinner = Loader;
