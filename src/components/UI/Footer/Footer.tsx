import React from "react";
import { FooterColumnData } from "./types";
import { defaultRender } from "./helpers";

export interface FooterProps {
  className?: string;
  title: string;
  copyright: string;
  data?: FooterColumnData[][];
}

interface FooterColumnProps {
  columnData?: FooterColumnData[];
}

const Left = (props: Pick<FooterProps, "title">): React.ReactElement => {
  const { title } = props;
  return (
    <div className={"w-52"}>
      <p className={"text-3xl"}>{title}</p>
    </div>
  );
};

const Right = (props: Pick<FooterProps, "copyright">): React.ReactElement => {
  const { copyright } = props;
  return (
    <div className={"flex flex-row items-end"}>
      <p className={"text-sm text-cloud-500 text-right"}>{copyright}</p>
    </div>
  );
};

const mapper = (item: FooterColumnData, index: number): React.ReactElement => {
  const { render = defaultRender } = item;
  return (
    <div key={`row-${index}`} className={"pb-4"}>
      {render({ ...item })}
    </div>
  );
};
const FooterColumn = (props: FooterColumnProps): React.ReactElement => {
  const { columnData } = props;
  return <div className={"flex flex-col flex-auto max-w-xs"}>{columnData?.map(mapper)}</div>;
};

export const Footer = (props: FooterProps): React.ReactElement => {
  const { className = "", title, copyright, data } = props;
  return (
    <footer className={`bg-white py-6 no-print hidden md:block ${className}`}>
      <div className="container flex">
        <Left title={title} />
        {data ? (
          data.map((columnData, index) => <FooterColumn key={`col-${index}`} columnData={columnData} />)
        ) : (
          <div className="flex-auto" />
        )}
        <Right copyright={copyright} />
      </div>
    </footer>
  );
};
