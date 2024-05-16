import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types";

const chatContextValue = {
  setSideContactActive: () => null,
};

export const ChatLayoutContext = createContext(chatContextValue);

export const ChatContextLayout = ({ children }) => {
  const [sideContactActive, setSideContactActive] = useState(false);

  const valueProvider = {
    sideContactActive,
    setSideContactActive,
  };

  const responsiveSideContact = () => {
    if (window.innerWidth <= 800) {
      setSideContactActive(false);
      return;
    }

    setSideContactActive(true);
  };

  useEffect(() => {
    window.addEventListener("resize", responsiveSideContact);
    responsiveSideContact();

    return () => {
      window.removeEventListener("resize", responsiveSideContact);
    };
  }, []);

  return (
    <ChatLayoutContext.Provider value={valueProvider}>
      {children}
    </ChatLayoutContext.Provider>
  );
};

ChatContextLayout.propTypes = {
  children: PropsTypes.element,
};
