import React from 'react';

const Notification = ({ message }) => {
  if (message.text === null) {
    return null;
  }

  const successStyle = {
    color: 'green',
    background: 'lightgray',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  const errorStyle = {
    color: 'red',
    background: 'lightgray',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  return (
    <div style={message.isError ? errorStyle : successStyle}>
      {message.text}
    </div>
  );
};

export default Notification
;
