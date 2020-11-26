import styled from "@emotion/styled";
import React, { FunctionComponent, ReactNode } from "react";
import tw from "twin.macro";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { mixin } from "../../../../styles";
import { AnchorLinkButtonSolidOrangeWhite, ButtonSolidOrangeWhite } from "../../Button";
import { OverlayContentBaseStyle } from "../Overlay";
import { OverlayContent, OverlayContentProps } from "./index";
import { MessageAddressResolver } from "./MessageAddressResolver";

export enum MessageTitle {
  NO_METAMASK = "Metamask not installed",
  NO_MANAGE_ACCESS = "No manage assets access",
  NO_USER_AUTHORIZATION = "User denied account authorization", // this error message must match error message from metamask extension itself
  TRANSACTION_ERROR = "Error - Failed transaction",
  SURRENDER_DOCUMENT_SUCCESS = "Surrender Document Success",
  ACCEPT_SURRENDER_DOCUMENT = "Surrender Accepted",
  REJECT_SURRENDER_DOCUMENT = "Surrender Rejected",
  CONFIRM_REJECT_SURRENDER_DOCUMENT = "Confirm Document Return",
  CHANGE_BENEFICIARY_SUCCESS = "Change Owner Success",
  NOMINATE_BENEFICIARY_HOLDER_SUCCESS = "Nomination Success",
  TRANSFER_HOLDER_SUCCESS = "Transfer Holder Success",
  ENDORSE_TRANSFER_SUCCESS = "Endorse Ownership/Holdership Success",
}

const ButtonClose: FunctionComponent = () => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();
  const handleCloseOverlay = (): void => {
    setOverlayVisible(false);
    showOverlay(undefined);
  };

  return <ButtonSolidOrangeWhite onClick={handleCloseOverlay}>Close</ButtonSolidOrangeWhite>;
};

const ButtonMetamaskInstall: FunctionComponent = () => {
  return (
    <AnchorLinkButtonSolidOrangeWhite
      href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
      target="_blank"
    >
      Install Metamask
    </AnchorLinkButtonSolidOrangeWhite>
  );
};

const ButtonConfirmAction = (handleOnClick: () => void): ReactNode => {
  const { setOverlayVisible, showOverlay } = useOverlayContext();
  const onClick = (): void => {
    handleOnClick();
    setOverlayVisible(false);
    showOverlay(undefined);
  };
  return (
    <ButtonSolidOrangeWhite onClick={onClick} data-testid={"confirmActionBtn"}>
      Confirm
    </ButtonSolidOrangeWhite>
  );
};

interface DocumentTransferMessageProps extends OverlayContentProps {
  children: React.ReactNode;
  isButtonMetamaskInstall?: boolean;
  isConfirmationMessage?: boolean;
  onConfirmationAction?: () => void;
}

export const DocumentTransferMessage: FunctionComponent<DocumentTransferMessageProps> = styled(
  ({ isButtonMetamaskInstall, isConfirmationMessage, onConfirmationAction, children, ...props }) => {
    const documentTransferButton = (): ReactNode => {
      if (isButtonMetamaskInstall) {
        return <ButtonMetamaskInstall />;
      }
      if (isConfirmationMessage && onConfirmationAction) {
        return (
          <div className="flex mx-0">
            <div className="col-auto ml-2">
              <ButtonClose />
            </div>
            <div className="col-auto ml-2">{ButtonConfirmAction(onConfirmationAction)}</div>
          </div>
        );
      }
      return <ButtonClose />;
    };

    return (
      <OverlayContent {...props}>
        <div className="flex-1">
          <div className="message">{children}</div>
        </div>
        <div className="flex mx-0">
          <div className="col-auto ml-auto">{documentTransferButton()}</div>
        </div>
      </OverlayContent>
    );
  }
)`
  ${OverlayContentBaseStyle()}

  max-width: 420px;
  height: auto;

  .overlay-title {
    ${mixin.fontSize(24)};
  }

  .message {
    h6 {
      ${mixin.fontSourcesansproBold};
      ${tw`text-grey-700`}
    }
  }
`;

interface MessageProps {
  address?: string;
  error?: string;
  beneficiaryAddress?: string;
  holderAddress?: string;
}

export const MessageNoMetamask: FunctionComponent = () => {
  return (
    <>
      <p>Oops! It seems like you have not installed the Metamask extension.</p>
      <p>You would need to install it before proceeding.</p>
    </>
  );
};

export const MessageNoManageAccess: FunctionComponent = () => {
  return <p>Oops! It seems like you do not have access to manage assets.</p>;
};

export const MessageNoUserAuthorization: FunctionComponent = () => {
  return (
    <>
      <p>Oops! It seems like you did not authorize to use Metamask extension.</p>
    </>
  );
};

export const MessageTransactionError: FunctionComponent<MessageProps> = ({ error }) => {
  return (
    <>
      <p>Oops! It seems like there&apos;s a failed transaction.</p>
      <p>{error}</p>
      <p>Please try again.</p>
    </>
  );
};

export const MessageSurrenderSuccess: FunctionComponent = () => {
  return <p>This Bill of Lading has been surrendered, pending acceptance of issuer.</p>;
};

export const AcceptSurrender: FunctionComponent = () => {
  return <p>Surrender for this Bill of Lading has been accepted.</p>;
};

export const RejectSurrender: FunctionComponent = () => {
  return <p>Surrender for this Bill of Lading has been rejected.</p>;
};

export const MessageRejectSurrenderConfirmation: FunctionComponent<MessageProps> = ({
  beneficiaryAddress,
  holderAddress,
}) => {
  return (
    <>
      <h6>Restore document to Owner:</h6>
      {beneficiaryAddress && <MessageAddressResolver address={beneficiaryAddress} />}
      <h6>and to Holder:</h6>
      {holderAddress && <MessageAddressResolver address={holderAddress} />}
    </>
  );
};

export const MessageBeneficiarySuccess: FunctionComponent<MessageProps> = ({ address }) => {
  return (
    <>
      <h6>Current Owner</h6>
      {address && <MessageAddressResolver address={address} />}
    </>
  );
};

export const MessageHolderSuccess: FunctionComponent<MessageProps> = ({ address }) => {
  return (
    <>
      <h6>Current Holder</h6>
      {address && <MessageAddressResolver address={address} />}
    </>
  );
};

export const MessageNominateBeneficiaryHolderSuccess: FunctionComponent = () => {
  return <p>Document has been nominated successfully. Please notify holder to execute transfer.</p>;
};

export const MessageEndorseTransferSuccess: FunctionComponent<MessageProps> = ({
  beneficiaryAddress,
  holderAddress,
}) => {
  return (
    <>
      <h6>Current Owner</h6>
      {beneficiaryAddress && <MessageAddressResolver address={beneficiaryAddress} />}
      <div />
      <h6>Current Holder</h6>
      {holderAddress && <MessageAddressResolver address={holderAddress} />}
    </>
  );
};

interface ShowDocumentTransferMessageOptionProps {
  isSuccess: boolean;
  error?: string;
  beneficiaryAddress?: string;
  holderAddress?: string;
  isButtonMetamaskInstall?: boolean;
  onConfirmationAction?: () => void;
  isConfirmationMessage?: boolean;
}

export const showDocumentTransferMessage = (
  title: string,
  option: ShowDocumentTransferMessageOptionProps
): ReactNode => {
  return (
    <DocumentTransferMessage
      title={title}
      isSuccess={option.isSuccess}
      isButtonMetamaskInstall={option.isButtonMetamaskInstall}
      onConfirmationAction={option.onConfirmationAction}
      isConfirmationMessage={option.isConfirmationMessage}
    >
      {title === MessageTitle.NO_METAMASK && <MessageNoMetamask />}
      {title === MessageTitle.NO_MANAGE_ACCESS && <MessageNoManageAccess />}
      {title === MessageTitle.NO_USER_AUTHORIZATION && <MessageNoUserAuthorization />}
      {title === MessageTitle.TRANSACTION_ERROR && <MessageTransactionError error={option.error} />}
      {title === MessageTitle.SURRENDER_DOCUMENT_SUCCESS && <MessageSurrenderSuccess />}
      {title === MessageTitle.ACCEPT_SURRENDER_DOCUMENT && <AcceptSurrender />}
      {title === MessageTitle.REJECT_SURRENDER_DOCUMENT && <RejectSurrender />}
      {title === MessageTitle.CONFIRM_REJECT_SURRENDER_DOCUMENT && (
        <MessageRejectSurrenderConfirmation
          beneficiaryAddress={option.beneficiaryAddress}
          holderAddress={option.holderAddress}
        />
      )}
      {title === MessageTitle.CHANGE_BENEFICIARY_SUCCESS && (
        <MessageBeneficiarySuccess address={option.beneficiaryAddress} />
      )}
      {title === MessageTitle.NOMINATE_BENEFICIARY_HOLDER_SUCCESS && <MessageNominateBeneficiaryHolderSuccess />}
      {title === MessageTitle.TRANSFER_HOLDER_SUCCESS && <MessageHolderSuccess address={option.holderAddress} />}
      {title === MessageTitle.ENDORSE_TRANSFER_SUCCESS && (
        <MessageEndorseTransferSuccess
          beneficiaryAddress={option.beneficiaryAddress}
          holderAddress={option.holderAddress}
        />
      )}
    </DocumentTransferMessage>
  );
};
