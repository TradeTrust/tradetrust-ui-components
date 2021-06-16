import React from "react";
import { FooterColumnData, FooterColumnProps, FooterProps } from "./types";
import { defaultRender, Bottom, Category } from "./helpers";

const Left = (props: Pick<FooterProps, "title">): React.ReactElement => {
  const { title } = props;
  return (
    <div className={"w-52"}>
      <p className={"text-3xl font-headings font-bold"}>{title}</p>
    </div>
  );
};

const mapper = (item: FooterColumnData, index: number): React.ReactElement => {
  const { render = defaultRender } = item;
  return (
    <div key={`row-${index}`} className={"pb-3"}>
      {render({ ...item })}
    </div>
  );
};
const FooterColumn = (props: FooterColumnProps): React.ReactElement => {
  const { category, items } = props;
  return (
    <div className={"flex flex-col flex-auto max-w-xs"}>
      <Category category={category} />
      {items.map(mapper)}
    </div>
  );
};

export const Footer = (props: FooterProps): React.ReactElement => {
  const { className = "", title, copyright, data } = props;
  return (
    <footer className={`bg-white py-6 no-print hidden md:block container ${className}`}>
      <div className="flex pb-3.5">
        <Left title={title} />
        {data ? (
          data.map((columnData, index) => <FooterColumn key={`col-${index}`} {...columnData} />)
        ) : (
          <div className="flex-auto" />
        )}
      </div>
      <hr />
      <Bottom copyright={copyright} />
    </footer>
  );
};
