import api from './api';

export const getInboxMessages = async () => {
  try {
    const results = await api.get(`/messages/inbox`);
    if (!results.data) {
      return [];
    }
    return results.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSentItems = async () => {
  try {
    const results = await api.get(`/messages/sent-items`);
    if (!results.data) {
      return [];
    }
    return results.data;
  } catch (err) {
    console.log(err);
  }
};

export const sendMail = async data => {
  try {
    const results = await api.post(`/messages/`, data);
    if (results) {
      return results.data;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteMessageById = async id => {
  try {
    const results = await api.delete(`/messages/${id}`);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};
