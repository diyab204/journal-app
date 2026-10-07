import { createContext, useContext } from "react";
import type { Entry } from "../types/index";

interface EntryContextType {
  entries: Entry[];
  getEntryById: (id: number) => Entry | undefined;
}

const EntryContext = createContext<EntryContextType | undefined>(undefined);

export const useEntries = () => {
  const context = useContext(EntryContext);
  if (!context) {
    throw new Error('useEntries must be used within an EntryProvider');
  }
  return context;
};

export { EntryContext };
