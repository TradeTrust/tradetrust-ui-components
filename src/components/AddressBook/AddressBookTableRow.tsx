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
    <a href={addressHref} target="_blank" rel="noreferrer noopener" className="text-blue-500">
      <ExternalLink className="ml-auto mr-4" />
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
    <tr onClick={onAddressSelect} data-testid="table-row">
      <th>{name}</th>
      <td>{address}</td>
      <td>{!isLocal && source}&nbsp;</td>
      <td>{network && <AddressBookEtherscanLink address={address} network={network} />}</td>
    </tr>
  );
};

interface AddressBookTableRowEmptyProps {
  message: string;
  textClassName?: string;
}

export const AddressBookTableRowEmpty: FunctionComponent<AddressBookTableRowEmptyProps> = ({
  message,
  textClassName = "",
}) => {
  return (
    <tr data-testid="table-row">
      <th>&mdash;</th>
      <td>
        <span className={`whitespace-pre-wrap mb-0 ${textClassName}`}>{message}</span>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  );
};
