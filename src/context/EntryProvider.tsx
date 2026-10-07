import { useState } from "react";
import type { Entry } from "../types/index";
import { EntryContext } from "./EntryContext";

export const EntryProvider: React.FC<{ children: React.ReactNode; initialEntries: Entry[] }> = ({
  children,
  initialEntries,
}) => {
  const [entries] = useState<Entry[]>(initialEntries);

  const getEntryById = (id: number) => entries.find((entry) => entry.id === id);

  return (
    <EntryContext.Provider value={{ entries, getEntryById }}>
      {children}
    </EntryContext.Provider>
  );
};