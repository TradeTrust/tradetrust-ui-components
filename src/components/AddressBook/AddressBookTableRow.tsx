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
}

export const AddressBookTableRow: FunctionComponent<AddressBookTableRowProps> = ({
  onAddressSelect,
  isLocal,
  address,
  name,
  network,
  source,
}) => {
  const addressHref = makeEtherscanAddressURL(address, network);

  return (
    <tr
      className={`cursor-pointer transition-colors duration-200 ease-out hover:bg-grey-200`}
      onClick={onAddressSelect}
      data-testid="table-row"
    >
      <th>{name}</th>
      <td>{address}</td>
      <td>{!isLocal && source}&nbsp;</td>
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
  textClassName?: string;
}

export const AddressBookTableRowEmpty: FunctionComponent<AddressBookTableRowEmptyProps> = ({
  message,
  textClassName,
}) => {
  return (
    <tr data-testid="table-row">
      <th>&mdash;</th>
      <td>
        <p className={`whitespace-pre-wrap mb-0 ${textClassName}`}>{message}</p>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  );
};
