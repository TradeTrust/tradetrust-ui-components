import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useKeyPress } from "./../../common/hooks/useKeyPress";

interface OverlayContextProps {
  overlayContent: React.ReactNode;
  showOverlay: (overlayContent: React.ReactNode) => void;
  closeOverlay: () => void;
  isOverlayVisible: boolean;
  setOverlayVisible: (isOverlayVisible: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const OverlayContext = createContext<OverlayContextProps>({
  overlayContent: undefined,
  showOverlay: noop,
  closeOverlay: noop,
  isOverlayVisible: false,
  setOverlayVisible: noop,
});

export const OverlayContextProvider: FunctionComponent = ({ children }) => {
  const [overlayContent, setOverlayContent] =
    useState<OverlayContextProps["overlayContent"]>();
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const escapePress = useKeyPress("Escape");

  const handleCloseOverlay = (): void => {
    setOverlayVisible(false);
    setOverlayContent(undefined);
  };

  useEffect(() => {
    if (escapePress) {
      setOverlayVisible(false);
    }
  }, [escapePress, setOverlayVisible]);

  useEffect(() => {
    // Using useEffect because we need setOverlayVisible to run AFTER setOverlayContent
    // If we simply have a function, the behaviour is not deterministic
    if (overlayContent !== undefined) {
      setOverlayVisible(true);
    }
  }, [overlayContent, setOverlayVisible]);

  return (
    <OverlayContext.Provider
      value={{
        overlayContent,
        showOverlay: setOverlayContent,
        closeOverlay: handleCloseOverlay,
        isOverlayVisible,
        setOverlayVisible,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlayContext = (): OverlayContextProps =>
  useContext<OverlayContextProps>(OverlayContext);
