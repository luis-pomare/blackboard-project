import React, { useState } from 'react';

export default function Tasks(props) {
  const { setState, state } = props;

  const [form, setForm] = useState({
    todo: '',
    time: '',
    deadline: 'none',
    team: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({
      todo: '',
      time: '',
      deadline: 'none',
      team: '',
    });

    setState({
      ...state,
      development: { todo: 'update', time: 'now', deadline: 'no' },
    });
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'todo':
        setForm({ ...form, todo: e.target.value });
        break;
      case 'time':
        setForm({ ...form, time: e.target.value });
        break;
      case 'deadline':
        setForm({ ...form, deadline: e.target.value });
        break;
      case 'team':
        setForm({ ...form, team: e.target.value });
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Assign a task</h2>
        <label htmlFor='todo'>Task to-do:</label>
        <input
          type='text'
          id='todo'
          name='fname'
          maxLength='30'
          required
          value={form.todo}
          onChange={handleChange}
        />
        <br />
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
        <br />
        <label htmlFor='deadline'>Deadline:</label>
        <select
          name='deadline'
          id='deadline'
          onChange={handleChange}
          value={form.deadline}
        >
          <option value='none'>No deadline</option>
          <option value='oneWeek'>1 week</option>
          <option value='twoWeeks'>2 weeks</option>
          <option value='threeWeeks'>3 weeks</option>
        </select>
        <br />
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
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}
