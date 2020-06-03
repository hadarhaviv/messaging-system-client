import React, { useContext } from 'react';
import './ListItem.scss';
import DashboardContext from '../../Dashboard/DashboardContext';

const ListItem = ({ item, onDelete }) => {
  const { sender, subject, messageBody } = item;
  const handleDelete = useContext(DashboardContext);

  return (
    <div className="list-item">
      <div className="mail-header">
        <div className="sender">{sender.name}</div>
        <div className="subject">{subject}</div>
      </div>
      <div className="content">{messageBody}</div>
      <div
        className="delete-icon"
        onClick={() => {
          handleDelete(item._id);
        }}
      >
        X
      </div>
    </div>
  );
};

export default ListItem;
