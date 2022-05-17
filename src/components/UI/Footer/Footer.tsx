import React from "react";
import { FooterColumnData, FooterColumnProps, FooterProps } from "./types";
import { defaultRender, Bottom, Category } from "./helpers";
import defaultTradeTrustLogo from "../../../static/images/tradetrust_logo.svg";

const sharedColumnPadding = `px-0 lg:px-6 xl:px-8`;

const Left = (props: Pick<FooterProps, "title" | "logoUrl">): React.ReactElement => {
  const { title, logoUrl } = props;

  return (
    <div className={`w-full lg:w-auto mb-12 lg:mb-0 ${sharedColumnPadding}`}>
      {title ? (
        <p className={"text-xl lg:text-3xl text-center lg:text-left font-headings font-bold"}>{title}</p>
      ) : (
        <img src={logoUrl || defaultTradeTrustLogo} />
      )}
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
    <div className={`w-1/2 lg:w-auto mb-8 lg:mb-0 ${sharedColumnPadding}`}>
      <Category category={category} />
      {items.map(mapper)}
    </div>
  );
};

export const Footer = (props: FooterProps): React.ReactElement => {
  const { className = "", title = "", logoUrl = "", copyright, data } = props;
  return (
    <footer className={`bg-white no-print ${className}`}>
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap pb-3.5 lg:justify-between">
          <Left title={title} logoUrl={logoUrl} />
          {data ? (
            data.map((columnData, index) => <FooterColumn key={`col-${index}`} {...columnData} />)
          ) : (
            <div className="flex-auto" />
          )}
        </div>
        <hr />
        <Bottom copyright={copyright} />
      </div>
    </footer>
  );
};
