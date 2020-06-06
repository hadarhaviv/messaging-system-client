import React, { useEffect, useState, useCallback } from 'react';
import './Dashboard.scss';
import DashboardContext from './DashboardContext';
import ListItems from '../ListItems/ListItems';
import {
  getInboxMessages,
  deleteMessageById,
  getSentItems
} from '../../services/messages';
import ModalWrapper from '../layout/ModalWrapper/ModalWrapper';
import NewMailForm from '../NewMailForm/NewMailForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import MailForm from '../MailForm/MailForm';
import Spinner from '../layout/Spinner/Spinner';

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
    setModal(null);
    fetchData();
  };

  const generateComponent = item => {
    if (item === 'newMail') {
      return <NewMailForm handleSubmit={handleClose} />;
    }
    const itemData = items.find(i => item === i._id);
    return <MailForm itemData={itemData} />;
  };

  return (
    <DashboardContext.Provider value={[handleDelete, setModal]}>
      <div className="dashboard">
        <button onClick={() => setModal('newMail')}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {items ? <ListItems items={items} /> : <Spinner />}
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
