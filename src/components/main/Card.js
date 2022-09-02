import React from 'react';
import '../../styles/Card.css';

export default function card(props) {
  const { todo, time, deadline, team } = props.info;
  return todo.length > 0 ? (
    <section className='card'>
      <h2>Next task for the team</h2>
      <div className='cardContent'>
        <span>
          <h3>To-do:</h3>
          <p>{todo}</p>
        </span>
        <span>
          <h3>Time:</h3>
          <p>{time} hours</p>
        </span>
        <span>
          <h3>Deadline:</h3>
          <p>{deadline}</p>
        </span>
        <span>
          <h3>Team:</h3>
          <p>{team}</p>
        </span>
      </div>
    </section>
  ) : (
    <p className='visible'>
      Please add a task for this team in the "Tasks" window.
    </p>
  );
}
