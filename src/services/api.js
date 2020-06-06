import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response && err.response.status === 401) {
      setAuthToken();
    }
    console.log(err);
    return Promise.reject(err);
  }
);

export default api;
