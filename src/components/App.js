import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Login from './auth/Login';
import setAuthToken from '../utils/setAuthToken';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

const ROUTES = ['inbox', 'sent-items'];

function App() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      setAuth(true);
    }
  }, []);

  const handleOpen = () => {
    console.log('side bar is open');
  };

  const handleClose = () => {
    console.log('side bar is closing');
  };

  const handleLogin = () => {
    setAuth(true);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Sidebar onOpen={handleOpen} onClose={handleClose} /> */}
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
        <Login isAuth={isAuth} handleLogin={handleLogin} />
      </Router>
    </div>
  );
}

export default App;
