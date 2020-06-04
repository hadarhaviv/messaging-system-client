import React from 'react';
import './Sidebar.scss';
import { BrowserRouter as Switch, Route, Router, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/#">New Mail</Link>
        </li>
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
