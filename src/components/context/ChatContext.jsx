import { createContext, useState } from "react";
import PropsTypes from "prop-types";
const chatContextValue = {
  setSideContactActive: () => null,
};

export const ChatLayoutContext = createContext(chatContextValue);
export const ChatContextLayout = ({ children }) => {
  const [sideContactActive, setSideContactActive] = useState(true);

  const valueProvider = {
    sideContactActive,
    setSideContactActive,
  };

  return (
    <ChatLayoutContext.Provider value={valueProvider}>
      {children}
    </ChatLayoutContext.Provider>
  );
};

ChatContextLayout.propTypes = {
  children: PropsTypes.element,
};
