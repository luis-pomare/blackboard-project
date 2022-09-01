import React from 'react';
import Card from './Card';

export default function Marketing(props) {
  const info = { ...props.state.marketing, team: 'Marketing' };
  return (
    <div>
      <Card info={info} />
    </div>
  );
}
