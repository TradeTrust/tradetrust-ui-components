import React, { FunctionComponent } from "react";
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
}

export const TileInfo: FunctionComponent<TileInfoProps> = ({ title, description }) => (
  <div className="p-4 w-full font-normal rounded-xl max-w-lg bg-white shadow-xl inline-block mb-2 transition-colors duration-200 hover:bg-gray-50">
    <h3 className="font-ubuntu font-normal text-1.625 text-cerulean-200">{title}</h3>
    <p className="text-cloud-900 mt-px">{description}</p>
  </div>
);
