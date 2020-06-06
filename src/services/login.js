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
    if (err.response) {
      throw new Error(err.response.data.error);
    } else {
      throw new Error(err);
    }
  }
};
