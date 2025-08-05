import React, { useState } from 'react';
import Search from './components/Search';
import { searchUsers } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async ({ username, location, minRepos }) => {
    if (!username && !location && !minRepos) {
      setUsers([]);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await searchUsers({ username, location, minRepos });
      setUsers(response.data.items);
    } catch (err) {
      console.error(err);
      setUsers([]);
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}

      {!loading && !error && users.length === 0 && (
        <p className="mt-4 text-center text-gray-600">No users found.</p>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <h3 className="text-xl font-semibold text-center">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="block mt-2 text-center text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
