import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEntries } from '../context/EntryContext';

export const Layout: React.FC = () => {
  const { entries } = useEntries();

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', borderRight: '1px solid #ddd', padding: '1.5rem', background: '#f9f9f9' }}>
        <h3>Entries</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {entries.map((entry) => (
            <li key={entry.id} style={{ marginBottom: '0.75rem' }}>
              <Link 
                to={`/entries/${entry.id}`} 
                style={{ textDecoration: 'none', color: '#0066cc', fontWeight: 500 }}
              >
                {entry.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};