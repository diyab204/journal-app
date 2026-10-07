import React from 'react';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/EntryContext';

export const EntryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getEntryById } = useEntries();

  const entry = id ? getEntryById(parseInt(id, 10)) : undefined;

  if (!entry) {
    return <div>Entry not found.</div>;
  }

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>{entry.title}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>{entry.description}</p>
      
      <div style={{ marginTop: '1.5rem' }}>
        {entry.tags.map((tag) => (
          <span 
            key={tag} 
            style={{ 
              background: '#e2e8f0', 
              color: '#334155', 
              marginRight: '6px', 
              padding: '4px 8px', 
              borderRadius: '4px',
              fontSize: '0.85rem'
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};