import { useState } from "react";
// import { journals } from "../data/journals";
import { useLiveQuery } from "dexie-react-hooks";
import { db, createJournal, deleteJournal  } from "../db/db";
export const Search = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const [editingJournalId, setEditingJournalId] = useState<number | null>(null);
  const deleteJournal = async (id: number) => {
    await db.journals.delete(id);
  };

  const journalList = useLiveQuery(() => db.journals.toArray()) ?? [];
  return (
    <div className="flex-1 p-6">
      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-96 rounded-lg border px-4 py-2"
        />
      </div>
      <div>
        <button
          onClick={() => setShowForm(true)}
          className="rounded-2xl border border-white bg-pink-100 p-5 shadow-sm transition hover: -translate-y-1 hover:shadow-md px-6 py-4 m-2 text-pink-500"
        >
          +Create Journal
        </button>
        {showForm && (
          <div className="rounded-2xl h-[20%] w-[40%] border  border-white bg-pink-100 px-4 py-6 shadow-sm transition hover: -translate-y-1 hover:shadow-md  flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-pink-500  m-2">
              Create Journal
            </h2>

            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              placeholder="Tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />

            <button
              onClick={async () => {
                const newTags = tagInput.split(",").map((tag) => tag.trim());

                const newJournal = {
                  title,
                  description,
                  tags: newTags,
                };
                if(newJournal){
                  createJournal(newJournal);
                }

                setTitle("");
                setDescription("");
                setTags([]);
                setTagInput("");
                setShowForm(false);
              }}
              className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition hover: -translate-y-1 hover:shadow-md px-3 py-2 text-pink-500"
            >
              Create
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition hover: -translate-y-1 hover:shadow-md px-3 py-2 text-pink-500"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Dashboard cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {journalList.map((journal) => (
          <div
            key={journal.id}
            className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md "
          >
            <div className="mb-3 flex flex-col items-center justify-between">
              <h2 className="text-l font-semibold text-pink-800 flex flex-col">
                {journal.title}
              </h2>

              <span className="text-m flex flex-col text-pink-600">
                {journal.description}
              </span>
            </div>

            <p className="mb-4 line-clamp-3 text-xs leading-6 text-pink-300">
              {journal.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </p>

            <button
              onClick={() => deleteJournal(journal.id as number)}
              className="rounded-lg bg-pink-100 px-3 py-2 text-pink-500"
            >
              Delete
            </button>

            <button
              onClick={() => {
                setEditingJournalId(journal.id as number);
                setTitle(journal.title);
                setDescription(journal.description);
                setShowForm(true);
              }}
            >
              Edit
            </button>

            <p className="text-xs font-medium text-pink-400"></p>
          </div>
        ))}
      </div>
    </div>
  );
};
