import React, { FunctionComponent } from "react";
import { ExternalLink } from "react-feather";
import { makeEtherscanAddressURL } from "../../utils";

interface AddressBookTableRowProps {
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
    <a className="inline-block text-cerulean-200" href={addressHref} target="_blank" rel="noreferrer noopener">
      <ExternalLink />
    </a>
  );
};

export const AddressBookTableRow: FunctionComponent<AddressBookTableRowProps> = ({
  onAddressSelect,
  isLocal,
  address,
  name,
  network,
  source,
}) => {
  return (
    <div
      className={`flex flex-col bg-white text-cloud-900 text-sm p-4 lg:flex-row even:bg-cerulean-50`}
      onClick={onAddressSelect}
      data-testid="table-row"
    >
      <h6 className="w-full lg:w-3/12" data-testid="table-row-name">
        {name}
      </h6>
      <h6 className="w-full lg:w-5/12" data-testid="table-row-address">
        {address}
      </h6>
      <h6 className="w-full lg:w-3/12" data-testid="table-row-source">
        {!isLocal && source}
      </h6>
      {network && (
        <div className="w-full lg:w-1/12 lg:text-right" data-testid="table-row-link">
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
    <div className="bg-cerulean-50 py-3 text-center" data-testid="table-row">
      <p>{message} </p>
    </div>
  );
};
