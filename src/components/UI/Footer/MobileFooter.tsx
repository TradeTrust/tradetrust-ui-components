import React from "react";
import { FooterColumnData } from "./types";
import { chunk } from "lodash";
import { defaultRender } from "./helpers";

export interface MobileFooterProps {
  className?: string;
  title: string;
  copyright: string;
  data?: MobileFooterColumnData[];
}

interface MobileFooterColumnData {
  category: string;
  items: FooterColumnData[];
}

const Top = (props: Pick<MobileFooterProps, "title">): React.ReactElement => {
  const { title } = props;
  return (
    <div className={"flex justify-center items-center pb-12"}>
      <p className={"text-xl"}>{title}</p>
    </div>
  );
};

const Bottom = (props: Pick<MobileFooterProps, "copyright">): React.ReactElement => {
  const { copyright } = props;
  return (
    <div className={"flex justify-center items-center pt-5 pb-7"}>
      <p className={"text-cloud-500 text-sm"}>{copyright}</p>
    </div>
  );
};

const mapper = (item: FooterColumnData, index: number): React.ReactElement => {
  const { render = defaultRender } = item;
  return <React.Fragment key={`row-${index}`}>{render({ ...item })}</React.Fragment>;
};
const MobileFooterColumn = (props: MobileFooterColumnData): React.ReactElement => {
  const { category, items } = props;
  return (
    <div className="flex flex-auto flex-col pb-7">
      <div className={"pb-4 font-bold text-cloud-500"}>{category}</div>
      {items.map(mapper)}
    </div>
  );
};

const CHUNK_SIZE = 2;
const chunkMapper = (chunk: MobileFooterColumnData[], i: number): React.ReactElement => {
  return (
    <div className={"flex"} key={i}>
      {chunk.map((columnData, index) => (
        <MobileFooterColumn key={`chunk-${index}-${columnData.category}`} {...columnData} />
      ))}
    </div>
  );
};

export const MobileFooter = (props: MobileFooterProps): React.ReactElement => {
  const { className = "", title, copyright, data } = props;
  const [chunks, setChunks] = React.useState<MobileFooterColumnData[][]>([[]]);

  React.useEffect(() => {
    setChunks(chunk(data, CHUNK_SIZE));
  }, [data]);
  return (
    <footer className={`bg-white py-7 md:hidden ${className}`}>
      <div className="flex flex-col px-7">
        <Top title={title} />
        {chunks.map(chunkMapper)}
      </div>
      <hr />
      <Bottom copyright={copyright} />
    </footer>
  );
};
