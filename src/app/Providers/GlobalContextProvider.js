import { useEffect, useState } from "react";
import { GlobalContext } from "../context";

export const GlobalContextProvider = ({ children }) => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const resetScroll = () => {
    setScrolledToBottom(false);
  };

  useEffect(() => {
    if (scrolledToBottom) {
      resetScroll();
      // alert("scrolled to bottom");
    }
  }, [scrolledToBottom]);

  const value = {
    scrolledToBottom,
    resetScroll,
    setScrolledToBottom,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
