import React from 'react';

export default function Tasks(props) {
  const { setState, state } = props;

  const handleClick = () => {
    setState({
      ...state,
      development: { todo: 'update', time: 'now', deadline: 'no' },
    });
  };

  return (
    <div>
      <button onClick={handleClick} type='button'>
        set
      </button>
    </div>
  );
}
