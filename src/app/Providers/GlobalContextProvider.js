import { useEffect, useState } from "react";
import { GlobalContext } from "../context";

export const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
