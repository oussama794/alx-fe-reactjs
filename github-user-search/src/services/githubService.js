import axios from 'axios';

export const searchUsers = (query) => {
  return axios.get(`https://api.github.com/search/users?q=${query}`);
};

export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`).then(res => res.data);
};


