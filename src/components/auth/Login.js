import React, { useState } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { login } from '../../services/login';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../layout/Spinner/Spinner';

const Login = ({ isAuth, handleLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      handleLogin(true);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  if (isAuth) {
    return <Redirect to="/inbox" />;
  }

  return (
    <div className="login-form">
      <h1>Sign In</h1>
      <p className="lead">
        <FontAwesomeIcon icon={faUser} /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="form-button" value="Login" />
      </form>
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};

export default Login;
