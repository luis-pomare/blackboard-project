import React from 'react';
import Card from './Card';

export default function Design(props) {
  const info = { ...props.state.design, team: 'Design' };
  return (
    <div>
      <Card info={info} />
    </div>
  );
}
