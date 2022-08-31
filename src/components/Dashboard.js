import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Development from './main/Development';
import Design from './main/Design';
import Marketing from './main/Marketing';
import Tasks from './main/Tasks';

export default function Dashboard() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/development' element={<Development />} />
          <Route path='/design' element={<Design />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route path='/' element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
