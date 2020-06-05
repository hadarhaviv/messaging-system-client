import React, { useContext } from 'react';
import './ListItem.scss';
import DashboardContext from '../../Dashboard/DashboardContext';
import MailForm from '../../MailForm/MailForm';

const ListItem = ({ item }) => {
  const { sender, subject, body, _id } = item;
  const [handleDelete, setModal] = useContext(DashboardContext);

  return (
    <div className="list-item" onClick={() => setModal(_id)}>
      <div className="mail-header">
        <div className="sender">{sender.name}</div>
        <div className="subject">{subject}</div>
      </div>
      <div className="content">{body}</div>
      <div
        className="delete-icon"
        onClick={e => {
          handleDelete(item._id);
          e.stopPropagation();
        }}
      >
        X
      </div>
    </div>
  );
};

export default ListItem;
