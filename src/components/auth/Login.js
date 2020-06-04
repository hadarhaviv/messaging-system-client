import React, { useState, useEffect, useCallBack } from 'react';
import './Login.scss';
import { Redirect } from 'react-router-dom';
import { login } from '../../api/login';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = ({ isAuth, handleLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    await login(email, password);
    handleLogin();
  };

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
    </div>
  );
};

// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

export default Login;
