import React, { useContext, useState, useEffect } from 'react';
import './ListItem.scss';
import PropTypes from 'prop-types';
import DashboardContext from '../../Dashboard/DashboardContext';
import Spinner from '../../layout/Spinner/Spinner';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = ({ item }) => {
  const { sender, subject, body, _id } = item;
  const [handleDelete, setModal] = useContext(DashboardContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      window.removeEventListener('onClick', onDelete, false);
    };
  });

  const onDelete = id => {
    setLoading(true);
    handleDelete(id);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

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
          onDelete(item._id);
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
