import React from 'react';
import Development from './main/Development';
import Design from './main/Design';
import Marketing from './main/Marketing';

export default function Dashboard() {
  return (
    <main>
      <Development />
      <Design />
      <Marketing />
    </main>
  );
}
