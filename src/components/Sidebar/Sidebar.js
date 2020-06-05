import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/sent-items">Sent Items</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
