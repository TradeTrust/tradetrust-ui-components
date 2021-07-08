import React, { FunctionComponent, SVGProps } from "react";
import { ChevronLeft } from "react-feather";

export const BackArrow: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <ChevronLeft className="text-cloud-900" />
    <h5 className="text-cloud-900">Back</h5>
  </div>
);

export interface TileInfoProps {
  title: string;
  description: string;
  TileIcon: React.FunctionComponent<SVGProps<SVGElement>>;
}

export const TileInfo: FunctionComponent<TileInfoProps> = ({ title, description, TileIcon }) => (
  <div className="flex p-3 w-96 h-28 font-normal rounded-xl max-w-lg bg-white shadow-xl inline-block transition-colors duration-200 hover:bg-gray-50">
    <div className="flex flex-col w-10/12">
      <h3 className="font-ubuntu font-normal text-1.625 text-cerulean-200">{title}</h3>
      <p className="text-cloud-900 mt-1">{description}</p>
    </div>
    <div className="w-2/12 m-auto">
      <TileIcon />
    </div>
  </div>
);
