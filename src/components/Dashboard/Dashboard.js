import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import DashboardContext from './DashboardContext';
import ListItems from '../ListItems/ListItems';
import { getInboxMessages, deleteMessageById } from '../../api/messages';

const Dashboard = props => {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    try {
      const resItems = await getInboxMessages();
      setItems(resItems.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async id => {
    await deleteMessageById(id);
    const newItems = items.filter(item => item._id !== id);
    setItems(newItems);
  };
  console.log('im in dashboard', props);
  return (
    <DashboardContext.Provider value={handleDelete}>
      <div className="dashboard">
        {items ? <ListItems items={items} /> : 'Loading..'}
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
