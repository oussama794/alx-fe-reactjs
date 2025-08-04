import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { searchUsers } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    if (!query) {
      setUsers([]);
      return;
    }
    try {
      const response = await searchUsers(query);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

