import api from './api';
import setAuthToken from '../utils/setAuthToken';

export const login = async (email, password) => {
  const body = JSON.stringify({ email, password });

  try {
    const results = await api.post('/auth/login', body);
    const { token } = results.data;
    if (token) {
      setAuthToken(token);
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
};
