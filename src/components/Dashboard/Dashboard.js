import React, { useEffect, useState, useCallback } from 'react';
import './Dashboard.scss';
import DashboardContext from './DashboardContext';
import ListItems from '../ListItems/ListItems';
import {
  getInboxMessages,
  deleteMessageById,
  getSentItems
} from '../../api/messages';
import ModalWrapper from '../layout/ModalWrapper';
import MailForm from '../MailForm/MailForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Dashboard = props => {
  const [items, setItems] = useState(null);
  const [modal, setModal] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const resItems =
        props.view === 'inbox'
          ? await getInboxMessages()
          : await getSentItems();
      setItems(resItems.data);
    } catch (err) {
      console.log(err);
    }
  }, [props]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async id => {
    await deleteMessageById(id);
    const newItems = items.filter(item => item._id !== id);
    setItems(newItems);
  };

  const handleClose = () => {
    setModal(false);
  };

  const generateComponent = item => {
    if (item === 'newMail') {
      return <MailForm />;
    }
    const itemData = items.find(i => item === i._id);
    return (
      <div>
        <h3>Receiver: {itemData.receiver.name}</h3>
        <h1>Subject: {itemData.subject}</h1>
        <p>{itemData.body}</p>
      </div>
    );
  };

  return (
    <DashboardContext.Provider value={[handleDelete, setModal]}>
      <div className="dashboard">
        <button onClick={() => setModal('newMail')}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {items ? <ListItems items={items} /> : 'Loading..'}
      </div>
      {modal && (
        <ModalWrapper handleClose={handleClose}>
          {generateComponent(modal)}
        </ModalWrapper>
      )}
    </DashboardContext.Provider>
  );
};

export default Dashboard;
