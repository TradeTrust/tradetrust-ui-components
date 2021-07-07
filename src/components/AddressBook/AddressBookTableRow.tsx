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
    // ---------------------
    <tr
      className={`flex flex-col text-left md:table-row ${(id + 1) % 2 !== 0 ? "bg-cerulean-50" : "bg-white"}`}
      // className={`${(id + 1) % 2 !== 0 ? "bg-cerulean-50" : "bg-white"}`}
      onClick={onAddressSelect}
      data-testid="table-row"
    >
      <td>{name}</td>
      <td>{address}</td>
      <td>{!isLocal && source}&nbsp;</td>
      <td>{network && <AddressBookEtherscanLink address={address} network={network} />}</td>
    </tr>
    // ----------------------
    // <div className={`flex flex-col md:table-row ${(id + 1) % 2 !== 0 ? "bg-cerulean-50" : "bg-white"}`}>
    //   <div className="table-cell">{name}</div>
    //   <div className="table-cell">{address}</div>
    //   <div className="table-cell">{!isLocal && source}&nbsp;</div>
    //   <div className="table-cell">{network && <AddressBookEtherscanLink address={address} network={network} />}</div>
    // </div>
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
    <>
      <div className="bg-cerulean-50 h-12" data-testid="table-row">
        {/* <th>&mdash;</th> */}
        <p className="flex text-cloud-900 h-full justify-center items-center">{message} </p>
        {/* <td>
        <span className={`whitespace-pre-wrap mb-0 ${textClassName}`}>{message}</span>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td> */}
      </div>
    </>
  );
};
