import React, { FunctionComponent } from "react";
import { ExternalLink } from "react-feather";
import { makeEtherscanAddressURL } from "../../utils";

interface AddressBookTableRowProps {
  onAddressSelect: () => void;
  address: string;
  isLocal: boolean;
  name: string;
  network: string;
  source?: string;
  className?: string;
}

export const AddressBookTableRow: FunctionComponent<AddressBookTableRowProps> = ({
  className,
  onAddressSelect,
  isLocal,
  address,
  name,
  network,
  source,
}) => {
  const addressHref = makeEtherscanAddressURL(address, network);

  return (
    <tr className={className} onClick={onAddressSelect} data-testid="table-row">
      <th>{name}</th>
      <td>{address}</td>
      {!isLocal && <td>{source ? source : "-"}</td>}
      <td>
        <a href={addressHref} target="_blank" rel="noreferrer noopener" className="text-blue">
          <ExternalLink className="ml-auto mr-4" />
        </a>
      </td>
    </tr>
  );
};

interface AddressBookTableRowEmptyProps {
  message: string;
}

export const AddressBookTableRowEmpty: FunctionComponent<AddressBookTableRowEmptyProps> = ({ message }) => {
  return (
    <tr data-testid="table-row">
      <th>&mdash;</th>
      <td>{message}</td>
      <td>&nbsp;</td>
    </tr>
  );
};
