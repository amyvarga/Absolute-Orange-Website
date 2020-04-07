import { act } from "react-dom/test-utils";
import testHook from "../test/testHook";
import useTabs from "./useTabs";

describe("Tabs hook", () => {
  let tabs, selectTab;
  const setup = (numTabs = 4) => {
    testHook(() => {
      const tabHook = useTabs(numTabs);
      tabs = tabHook.tabs;
      selectTab = tabHook.selectTab;
    });
  };
  describe("Default tabs", () => {
    it("should provide an initial 4 tabs by default", () => {
      setup();
      expect(tabs.length).toEqual(4);
    });

    it("should set first the first tab to true", () => {
      setup();
      expect(tabs[0]).toBeTruthy();
    });
  });

  describe("User defined Number of tabs", () => {
    it("should set tabs for 2 tabs with the first tab set to true", () => {
      setup(2);
      expect(tabs.length).toEqual(2);
      expect(tabs[0]).toBeTruthy();
    });

    it("should set tabs for 6 tabs with the first tab set to true", () => {
      setup(6);
      expect(tabs.length).toEqual(6);
      expect(tabs[0]).toBeTruthy();
    });
  });

  describe("selectTab function", () => {
    it("should return a selectTab method as second index in returned tuple", () => {
      setup();
      expect(selectTab).toBeInstanceOf(Function);
    });

    it("should select the tab when called", () => {
      setup();
      act(() => {
        selectTab(3);
      });
      expect(tabs).toEqual([false, false, false, true]);
    });

    // describe("Multiple tabs", () => {
    //   testHook(() => {
    //     const tabsA = useTabs(4);
    //     const tabsB = useTabs(2);
    //     const [tabsA, selectTabA] = tabsA;
    //     const [tabsB, selectTabB] = tabsB;

    //     expect(selectTab(3)).toEqual([false, false, false, true]);
    //   });
    // });
  });
});
