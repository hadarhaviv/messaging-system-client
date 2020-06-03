import React from 'react';
import './Sidebar.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const ROUTES = ['inbox', 'sent-items'];

const Sidebar = () => {
  return (
    <Router>
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
      <Switch>
        {ROUTES.map(route => (
          <Route
            exact
            path={`/${route}`}
            key={route}
            render={() => <Dashboard view={route} />}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Sidebar;
