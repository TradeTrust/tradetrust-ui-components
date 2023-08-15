import React, { FunctionComponent } from "react";
import { useOverlayContext } from "../../../../common/context/OverlayContext";
import { Button } from "../../Button";
import { IconSuccess } from "../../Icon";
import warningIcon from "../../../../../src/static/images/Alert/warning.png";
import { useLockBodyScroll } from "../../../../common/hooks/useLockBodyScroll";

export const enum MESSAGE_TYPE {
  SUCCESS = "success",
  WARNING = "warning",
  NONE = "none",
}

export interface ConfirmationMessageProps {
  messageType: MESSAGE_TYPE;
  title?: string;
  children?: React.ReactNode;
  btnText?: string;
  maxHeight?: number;
  className?: string;
}

export const DismissalButton: FunctionComponent<{ buttonText?: string }> = ({
  buttonText,
}: {
  buttonText?: string;
}) => {
  const { closeOverlay } = useOverlayContext();
  return (
    <Button
      className="bg-cerulean-500 hover:bg-cerulean-800 rounded-xl px-3 py-2 mx-auto mt-3 text-white font-normal"
      onClick={closeOverlay}
    >
      {buttonText ? buttonText : "Dismiss"}
    </Button>
  );
};

export const ConfirmationContext: FunctionComponent<
  ConfirmationMessageProps
> = ({
  messageType,
  title: messageTitle,
  children,
  maxHeight,
  className,
  ...props
}: ConfirmationMessageProps) => {
  useLockBodyScroll();

  const style = {
    ...(maxHeight && { maxHeight: `${maxHeight}px` }),
  };

  let messageIcon;
  switch (messageType) {
    case MESSAGE_TYPE.SUCCESS:
      messageIcon = <IconSuccess className="text-forest-500 h-14 w-14" />;
      break;
    case MESSAGE_TYPE.WARNING:
      messageIcon = <img className="h-14 w-14" src={warningIcon} />;
      break;
    default:
      break;
  }
  return (
    <div
      className={`relative bg-white rounded-xl text-center p-5 overflow-auto w-80 h-70 ${className}`}
      {...props}
      style={style}
    >
      <div className="flex flex-col">
        {messageIcon ? (
          <div className="self-center mt-5">{messageIcon}</div>
        ) : (
          <></>
        )}
        <h3 className="text-cloud-800 text-xl mt-5 mb-5">{messageTitle}</h3>
        {children}
      </div>
    </div>
  );
};
