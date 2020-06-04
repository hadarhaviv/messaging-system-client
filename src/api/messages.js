import api from './api';

export const getInboxMessages = async () => {
  try {
    const results = await api.get(`/messages/inbox`);
    if (results) {
      return results.data;
    }
  } catch (err) {
    console.log(err);
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
