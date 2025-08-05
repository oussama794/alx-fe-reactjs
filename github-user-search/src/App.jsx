import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { searchUsers } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    if (!query) {
      setUsers([]);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await searchUsers(query);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
      setUsers([]);
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length === 0 && !loading && !error && <p>No users found.</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width={50} />
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


