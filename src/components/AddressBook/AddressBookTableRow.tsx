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
    <a href={addressHref} target="_blank" rel="noreferrer noopener">
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
    // <table
    //   // className={`table-row h-12 text-cloud-900 text-sm ${id % 2 === 0 ? "bg-cerulean-50" : "bg-white"}`}
    //   onClick={onAddressSelect}
    //   data-testid="table-row"
    // >
    //   {/* <td className="table-cell w-56 ml-7">{name}</td>
    //   <td className="table-cell w-56">{address}</td>
    //   <td className="table-cell w-56">{!isLocal && source}&nbsp;</td>
    //   <td className="table-cell w-56">{network && <AddressBookEtherscanLink address={address} network={network} />}</td> */}
    //   <td>{name}</td>
    //   <td>{address}</td>
    //   <td>{!isLocal && source}&nbsp;</td>
    //   <td>{network && <AddressBookEtherscanLink address={address} network={network} />}</td>
    // </table>
    <tr onClick={onAddressSelect} data-testid="table-row">
      <td>{name}</td>
      <td>{address}</td>
      <td>{!isLocal && source}&nbsp;</td>
      <td>{network && <AddressBookEtherscanLink address={address} network={network} />}</td>
    </tr>
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
    <td colSpan={100}>
      <div className="bg-cerulean-50 h-12" data-testid="table-row">
        {/* <th>&mdash;</th> */}
        <p className="flex text-cloud-900 h-full justify-center items-center">{message} </p>
        {/* <td>
        <span className={`whitespace-pre-wrap mb-0 ${textClassName}`}>{message}</span>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td> */}
      </div>
    </td>
  );
};
