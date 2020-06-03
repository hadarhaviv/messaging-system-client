import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import DashboardContext from './DashboardContext';
import ListItems from '../ListItems/ListItems';
import { getInboxMessages, deleteMessageById } from '../../api/messages';

const Dashboard = props => {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    const resItems = await getInboxMessages();
    setItems(resItems.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async id => {
    await deleteMessageById(id);
    const newItems = items.filter(item => item._id !== id);
    setItems(newItems);
  };

  return (
    <DashboardContext.Provider value={handleDelete}>
      <div className="dashboard">
        <div>{props.view.toUpperCase()}</div>
        {items ? <ListItems items={items} /> : 'Loading..'}
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
