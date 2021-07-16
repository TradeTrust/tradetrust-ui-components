import React, { FunctionComponent } from "react";
import { ExternalLink } from "react-feather";
import { makeEtherscanAddressURL } from "../../utils";

interface AddressBookTableRowProps {
  id: number;
  onAddressSelect: () => void;
  address: string;
  isLocal: boolean;
  name: string;
  network?: string;
  source?: string;
}

interface AddressBookEtherscanLinkProps {
  address: string;
  network: string;
}

const AddressBookEtherscanLink: FunctionComponent<AddressBookEtherscanLinkProps> = ({ address, network }) => {
  const addressHref = makeEtherscanAddressURL(address, network);
  return (
    <a className="inline-block" href={addressHref} target="_blank" rel="noreferrer noopener">
      <ExternalLink />
    </a>
  );
};

export const AddressBookTableRow: FunctionComponent<AddressBookTableRowProps> = ({
  id,
  onAddressSelect,
  isLocal,
  address,
  name,
  network,
  source,
}) => {
  return (
    <div
      className={`flex flex-col text-cloud-900 text-sm p-4 md:flex-row ${
        (id + 1) % 2 !== 0 ? "bg-cerulean-50" : "bg-white"
      }`}
      onClick={onAddressSelect}
      data-testid="table-row"
    >
      <h6 className="w-full md:w-3/12">{name}</h6>
      <h6 className="w-full md:w-5/12">{address}</h6>
      <h6 className="w-full md:w-3/12">{!isLocal && source}</h6>
      {network && (
        <div className="w-full text-cerulean-200 md:w-1/12 md:text-right">
          <AddressBookEtherscanLink address={address} network={network} />
        </div>
      )}
    </div>
  );
};

interface AddressBookTableRowEmptyProps {
  message: string;
}

export const AddressBookTableRowEmpty: FunctionComponent<AddressBookTableRowEmptyProps> = ({ message }) => {
  return (
    <>
      <div className="bg-cerulean-50 h-12" data-testid="table-row">
        <p className="flex text-cloud-900 h-full justify-center items-center">{message} </p>
      </div>
    </>
  );
};
