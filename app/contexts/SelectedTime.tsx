"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Timeframe = "daily" | "weekly" | "monthly";

interface SelectedTimeContextType {
  select: Timeframe;
  setSelect: Dispatch<SetStateAction<Timeframe>>;
}

const SelectedTimeContext = createContext<SelectedTimeContextType | undefined>(
  undefined
);

interface SelectedTimeProviderProps {
  children: ReactNode;
}

function SelectedTimeProvider({ children }: SelectedTimeProviderProps) {
  const [select, setSelect] = useState<Timeframe>("weekly");

  return (
    <SelectedTimeContext.Provider value={{ select, setSelect }}>
      {children}
    </SelectedTimeContext.Provider>
  );
}

function useSelectedTime() {
  const context = useContext(SelectedTimeContext);
  if (context === undefined)
    throw new Error(
      "SelectedTimeContext was used outside of the CheckBoxProvider"
    );
  return context;
}

export { SelectedTimeProvider, useSelectedTime };
