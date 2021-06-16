import React from "react";
export interface FooterColumnData extends FooterColumnItem {
  render?: (props: FooterColumnItemProps) => React.ReactElement;
}

export interface FooterColumnItemProps extends FooterColumnItem {
  [key: string]: any;
}

interface FooterColumnItem {
  label: string;
  to: string;
}
