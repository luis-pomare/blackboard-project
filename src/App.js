import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Dashboard />
    </>
  );
}
