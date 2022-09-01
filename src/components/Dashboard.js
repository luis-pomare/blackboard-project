import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Development from './main/Development';
import Design from './main/Design';
import Marketing from './main/Marketing';
import Tasks from './main/Tasks';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [state, setState] = useState({
    development: { todo: '', time: '', deadline: '' },
    design: { todo: '', time: '', deadline: '' },
    marketing: { todo: '', time: '', deadline: '' },
  });
  return (
    <main>
      <Routes>
        <Route path='/development' element={<Development state={state} />} />
        <Route path='/design' element={<Design state={state} />} />
        <Route path='/marketing' element={<Marketing state={state} />} />
        <Route path='/' element={<Tasks state={state} setState={setState} />} />
      </Routes>
    </main>
  );
}
