import axios from 'axios';

export const searchUsers = ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  return axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`);
};

export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`).then(res => res.data);
};


