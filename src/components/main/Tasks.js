import React from 'react';

export default function Tasks(props) {
  // const { setState, state } = props;

  // // const handleSubmit = () => {
  // //   setState({
  // //     ...state,
  // //     development: { todo: 'update', time: 'now', deadline: 'no' },
  // //   });
  // // };

  return (
    <div>
      <form>
        <h2>Assign a task</h2>
        <label for='todo'>Task to-do:</label>
        <input type='text' id='todo' name='fname' maxlength='30' required />
        <br />
        <label for='time'>Time (between 1 and 15 hours):</label>
        <input type='number' id='time' name='time' min='1' max='15' required />
        <br />
        <label for='deadline'>Deadline:</label>
        <select name='deadline' id='deadline'>
          <option value='none'>No deadline</option>
          <option value='oneWeek'>1 week</option>
          <option value='twoWeeks'>2 weeks</option>
          <option value='threeWeeks'>3 weeks</option>
        </select>
        <br />
        <label for='team'>Team:</label>
        <select name='team' id='team' required>
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
