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

export interface FooterColumnProps {
  category: string;
  items: FooterColumnData[];
}

export interface FooterProps {
  className?: string;
  title?: string;
  logoUrl?: string;
  copyright: string;
  data?: FooterColumnProps[];
}
