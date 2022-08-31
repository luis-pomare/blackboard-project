import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

export default function Sidebar() {
  const activeClassName = 'active';
  return (
    <aside>
      <NavLink
        to='/development'
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        development
      </NavLink>

      <NavLink
        to='/design'
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        design
      </NavLink>

      <NavLink
        to='/marketing'
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        marketing
      </NavLink>

      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Tasks
      </NavLink>
    </aside>
  );
}
