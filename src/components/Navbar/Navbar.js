import React from 'react';
import './Navbar.scss';

import setAuthToken from '../../utils/setAuthToken';

const Navbar = ({ setAuth }) => {
  const handleLogout = () => {
    setAuthToken();
    setAuth();
  };

  return (
    <div className="navbar">
      <div className="logo">MailIt</div>
      <div onClick={handleLogout} className="logout">
        Logout
      </div>
    </div>
  );
};

export default Navbar;
