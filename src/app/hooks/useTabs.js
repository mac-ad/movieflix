import { useEffect, useState } from "react";

export const useTabs = ({ tabLocation, defaultState = "" }) => {
  const [activeTab, setActiveTab] = useState("");

  // useEffect(() => {
  //   const tabStates = JSON.parse(localStorage.getItem("tabStates")) || {};

  //   console.log(tabStates);

  //   if (tabStates[tabLocation]) {
  //     setActiveTab(tabStates[tabLocation]);
  //   } else {
  //     setActiveTab(defaultState);
  //   }
  // }, [defaultState, tabLocation]);

  useEffect(() => {
    setActiveTab(defaultState);
  }, []);

  const setTab = (key) => {
    if (key === activeTab) return;

    // localStorage.setItem(
    //   "tabStates",
    //   JSON.stringify({
    //     ...JSON.parse(localStorage.getItem("tabStates")),
    //     [tabLocation]: key,
    //   })
    // );

    setActiveTab(key);
  };

  return { activeTab, setTab };
};
