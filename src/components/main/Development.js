import React from 'react';
import Card from './Card';

export default function Development(props) {
  const info = { ...props.state.development, team: 'Development' };
  return (
    <div>
      <Card info={info} />
    </div>
  );
}
