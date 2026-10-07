// SingleEntry.tsx
import { useParams } from "react-router-dom";
import { EntryProvider } from "../context/EntryProvider";
import {EntryDetail} from "./Content";
import { entries } from "../data/journals";

export function SingleEntry() {
  const { id } = useParams();
  const entry = entries.find(e => e.id === Number(id));
  if (!entry) return <p>Not found</p>;

  return (
    <EntryProvider initialEntries={
      entries
    }>
      <EntryDetail />
    </EntryProvider>
  );
}   