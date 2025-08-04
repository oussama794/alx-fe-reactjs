import axios from 'axios';

export const searchUsers = (query) => {
  return axios.get(`https://api.github.com/search/users?q=${query}`);
};


