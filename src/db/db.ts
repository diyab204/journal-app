
import Dexie, { type Table } from "dexie";

export interface Journal {
  id?: number;
  title: string;
  description: string;
  tags: string[];
}

export class JournalDB extends Dexie {
  journals!: Table<Journal, number>;

  constructor() {
    super("JournalDB");

    this.version(1).stores({
      journals: "++id",
    });
  }
}

export const db = new JournalDB();
// export async function seedDatabase() {
//   const count = await db.journals.count();

//   if (count === 0) {
//     await db.journals.bulkAdd(journals);
//   }
// }

export async function createJournal(newData : Journal){
  await db.journals.add(newData);
}

export async function deleteJournal(id : number){
  await db.journals.delete(id);
}

export async function getJournalById(id: number): Promise<Journal | undefined> {
  return await db.journals.get(id);
}