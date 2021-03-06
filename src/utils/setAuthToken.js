import api from '../services/api';

const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ` + token;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
    window.location.pathname = '/';
  }
};

export default setAuthToken;
