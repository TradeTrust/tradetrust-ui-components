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
    <a href={addressHref} target="_blank" rel="noreferrer noopener" className="text-cerulean-200">
      <ExternalLink className="ml-auto mr-4" />
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
      className={`table-row h-12 text-cloud-900 text-sm ${id % 2 === 0 ? "bg-cerulean-50" : "bg-white"}`}
      onClick={onAddressSelect}
      data-testid="table-row"
    >
      <div className="table-cell w-56 ml-7">{name}</div>
      <div className="table-cell w-56">{address}</div>
      <div className="table-cell w-56">{!isLocal && source}&nbsp;</div>
      <div className="table-cell w-56">
        {network && <AddressBookEtherscanLink address={address} network={network} />}
      </div>
    </div>
  );
};

interface AddressBookTableRowEmptyProps {
  message: string;
  // textClassName?: string;
}

export const AddressBookTableRowEmpty: FunctionComponent<AddressBookTableRowEmptyProps> = ({
  message,
  // textClassName = "",
}) => {
  return (
    <div className="bg-cerulean-50 h-12" data-testid="table-row">
      {/* <th>&mdash;</th> */}
      <p className="flex text-cloud-900 h-full justify-center items-center">{message} </p>
      {/* <td>
        <span className={`whitespace-pre-wrap mb-0 ${textClassName}`}>{message}</span>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td> */}
    </div>
  );
};
