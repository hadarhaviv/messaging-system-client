import axios from 'axios';

const Domain = 'http://localhost:5000/api/v1';

export const getInboxMessages = async () => {
  try {
    const results = await axios.get(`${Domain}/messages/`);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};