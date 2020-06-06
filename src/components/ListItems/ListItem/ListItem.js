import React, { useContext } from 'react';
import './ListItem.scss';
import PropTypes from 'prop-types';
import DashboardContext from '../../Dashboard/DashboardContext';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};
