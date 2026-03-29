"use client";
import { createContext, useContext, useState } from "react";
import { TabId } from "@/types";

interface TabCtx {
  active: TabId;
  setActive: (t: TabId) => void;
}

const TabContext = createContext<TabCtx>({ active: "overview", setActive: () => {} });

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<TabId>("overview");
  return <TabContext.Provider value={{ active, setActive }}>{children}</TabContext.Provider>;
}

export const useTab = () => useContext(TabContext);
