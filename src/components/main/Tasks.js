import React, { useState } from 'react';
import '../../styles/Tasks.css';

export default function Tasks(props) {
  const { setState, state } = props;

  const [form, setForm] = useState({
    todo: '',
    time: '',
    deadline: 'none',
    team: '',
    message: 'noVisible',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({
      todo: '',
      time: '',
      deadline: 'none',
      team: '',
      message: 'visible',
    });

    const { todo, time, deadline, team } = form;

    switch (team) {
      case 'development':
        setState({
          ...state,
          development: {
            todo,
            time,
            deadline,
          },
        });
        break;
      case 'design':
        setState({
          ...state,
          design: {
            todo,
            time,
            deadline,
          },
        });
        break;
      case 'marketing':
        setState({
          ...state,
          marketing: {
            todo,
            time,
            deadline,
          },
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'todo':
        setForm({ ...form, todo: e.target.value, message: 'noVisible' });
        break;
      case 'time':
        setForm({ ...form, time: e.target.value, message: 'noVisible' });
        break;
      case 'deadline':
        setForm({ ...form, deadline: e.target.value, message: 'noVisible' });
        break;
      case 'team':
        setForm({ ...form, team: e.target.value, message: 'noVisible' });
        break;
      default:
        break;
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>Assign a task</h2>
        <label htmlFor='todo'>Task to-do:</label>
        <input
          type='text'
          id='todo'
          name='fname'
          maxLength='50'
          required
          value={form.todo}
          onChange={handleChange}
        />
        <label htmlFor='time'>Time (between 1 and 15 hours):</label>
        <input
          type='number'
          id='time'
          name='time'
          min='1'
          max='15'
          required
          onChange={handleChange}
          value={form.time}
        />
        <label htmlFor='deadline'>Deadline:</label>
        <select
          name='deadline'
          id='deadline'
          onChange={handleChange}
          value={form.deadline}
        >
          <option value='none'>No deadline</option>
          <option value='1 Week'>1 week</option>
          <option value='2 weeks'>2 weeks</option>
          <option value='3 Weeks'>3 weeks</option>
        </select>
        <label htmlFor='team'>Team:</label>
        <select
          name='team'
          id='team'
          required
          onChange={handleChange}
          value={form.team}
        >
          <option value=''>None</option>
          <option value='development'>Development</option>
          <option value='design'>Design</option>
          <option value='marketing'>Marketing</option>
        </select>
        <button type='submit' value='submit'>
          submit
        </button>
      </form>
      <p className={form.message}>Task submited correctly!</p>
    </div>
  );
}
