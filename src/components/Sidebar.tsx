
import { Link, useParams } from "react-router-dom";
import { entries } from "../data/journals";


function Sidebar() {
    const {id } = useParams();
  return (
 <aside className="w-64 border-r border-pink-100 p-4">
      <h1 className="mb-4 text-lg font-bold text-pink-800">Journal</h1>
      <nav className="space-y-1">
        {entries.map(entry => (
          <Link
            key={entry.id}
            to={`/entries/${entry.id}`}
            className={`block rounded-lg px-3 py-2 text-sm transition ${
              String(entry.id) === id
                ? "bg-pink-100 font-semibold text-pink-800"
                : "text-pink-600 hover:bg-pink-50"
            }`}
          >
            {entry.title}
          </Link>
        ))}
      </nav>
    </aside>
   
  );
}

export default Sidebar;