import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Development from './main/Development';
import Design from './main/Design';
import Marketing from './main/Marketing';
import Tasks from './main/Tasks';
import '../styles/Dashboard.css';

export default function Dashboard() {
  return (
    <main>
      <Routes>
        <Route path='/development' element={<Development />} />
        <Route path='/design' element={<Design />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/' element={<Tasks />} />
      </Routes>
    </main>
  );
}
