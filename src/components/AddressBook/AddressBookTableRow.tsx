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
    <a href={addressHref} target="_blank" rel="noreferrer noopener">
      <ExternalLink className="md:ml-auto md:mr-4" />
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
    <tr
      className={`flex flex-col text-left md:table-row ${(id + 1) % 2 !== 0 ? "bg-cerulean-50" : "bg-white"}`}
      onClick={onAddressSelect}
      data-testid="table-row"
    >
      <td>{name}</td>
      <td>{address}</td>
      <td>{!isLocal && source}&nbsp;</td>
      <td>{network && <AddressBookEtherscanLink address={address} network={network} />}</td>
    </tr>
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
