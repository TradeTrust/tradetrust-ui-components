export interface FooterColumnData extends FooterColumnItem {
  render?: (props: FooterColumnItemProps) => JSX.Element;
}

export interface FooterColumnItemProps extends FooterColumnItem {
  [key: string]: any;
}

interface FooterColumnItem {
  label: string;
  to: string;
}
