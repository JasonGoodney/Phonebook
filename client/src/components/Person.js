import React from 'react';

const Person = ({ person, removePerson }) => {
  return (
    <div>
      <p
        style={{ display: 'inline' }}
      >
        {person.name} {person.number}
      </p>
      <button
        style={{ display: 'inline', marginLeft: 8 }}
        onClick={removePerson}
      >delete</button>
    </div>
  );
};

export default Person
;
