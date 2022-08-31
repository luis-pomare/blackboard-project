import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Dashboard />
      </BrowserRouter>
    </>
  );
}
