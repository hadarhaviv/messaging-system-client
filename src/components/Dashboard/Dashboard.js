import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import ListItems from '../ListItems/ListItems';
import { getInboxMessages } from '../../api/messages';

const Dashboard = props => {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    const resItems = await getInboxMessages();
    setItems(resItems.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div>{props.view.toUpperCase()}</div>
      {items ? <ListItems items={items} /> : 'Loading..'}
    </div>
  );
};

export default Dashboard;
