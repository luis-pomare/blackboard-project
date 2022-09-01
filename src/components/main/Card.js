import React from 'react';
import '../../styles/Card.css';

export default function card() {
  return (
    <section className='card'>
      <h2>Next task for the team</h2>
      <div className='cardContent'>
        <span>
          <h3>Todo:</h3>
          <p></p>
        </span>
        <span>
          <h3>Time:</h3>
          <p>hours</p>
        </span>
        <span>
          <h3>Deadline:</h3>
          <p></p>
        </span>
        <span>
          <h3>Team:</h3>
          <p></p>
        </span>
      </div>
    </section>
  );
}
