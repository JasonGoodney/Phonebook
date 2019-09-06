import React from 'react';

const Filter = ({ searchQuery, onChange }) => {
  return (
    <div>
      filter shown with <input value={searchQuery} onChange={onChange} />
    </div>
  );
};

export default Filter
;
