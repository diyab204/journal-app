
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { EntryProvider } from './context/EntryProvider';

import { useEffect } from "react";
// import { Layout } from './layouts/EntriesLayout';
// import { EntryDetail } from './components/Content';
// import { createContext } from 'react';
import { Search } from './components/Search';
import {Nav} from './components/Nav'


// const sampleEntries: Entry[] = [
//   { id: 1, title: 'Introduction to React', description: 'React is a popular library for building web and native user interfaces.', tags: ['react', 'frontend'] },
//   { id: 2, title: 'Understanding Context API', description: 'Context provides a way to pass data through the component tree without manually passing props.', tags: ['react', 'state'] },
//   { id: 3, title: 'React Router Setup', description: 'React Router enables "client-side routing" in single-page applications.', tags: ['routing', 'spa'] },
// ];





export default function App() {

      useEffect(() => {
  // seedDatabase();
}, []);
  
  return (
    <div className='flex'>
        <Nav/>
    <Search/>
    
    </div>
    

    // <EntryProvider initialEntries={sampleEntries}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<p style={{ color: '#666' }}>👈 Select an entry from the sidebar to view details.</p>} />
    //         <Route path="entries/:id" element={<EntryDetail />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </EntryProvider>
  );
}