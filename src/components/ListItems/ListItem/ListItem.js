import React from 'react';
import './ListItem.scss';

const ListItem = ({ item }) => {
  const { sender, subject, messageBody } = item;
  return (
    <div className="list-item">
      <div className="mail-header">
        <div className="sender">{sender.name}</div>
        <div className="subject">{subject}</div>
      </div>
      <div className="content">{messageBody}</div>
    </div>
  );
};

export default ListItem;
