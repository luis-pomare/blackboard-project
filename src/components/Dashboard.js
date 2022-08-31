import React from 'react';
import Development from './main/Development';
import Design from './main/Design';
import Marketing from './main/Marketing';
import Tasks from './main/Tasks';

export default function Dashboard() {
  return (
    <main>
      <Development />
      <Design />
      <Marketing />
      <Tasks />
    </main>
  );
}
