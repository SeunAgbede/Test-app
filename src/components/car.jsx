import React from 'react';

function Car({ name, description, price }) {

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Car