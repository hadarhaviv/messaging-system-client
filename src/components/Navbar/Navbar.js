import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ view }) => {
  return (
    <div className="navbar">
      <button id="menu" title="Menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
      Mail It
    </div>
  );
};

export default Navbar;
