import React from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/inbox" exact>
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/sent-items">
            Sent Items
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
