import { useState } from "react";

const getState = (numTabs, selectedTab) =>
  Array(numTabs)
    .fill(false)
    .map((_, index) => index === selectedTab);

const useTabs = (numTabs = 4) => {
  const [tabs, setState] = useState(getState(numTabs, 0));
  const selectTab = (selectedTab) => {
    setState(getState(numTabs, selectedTab));
  };
  return {
    tabs,
    selectTab,
  };
};

export default useTabs;
