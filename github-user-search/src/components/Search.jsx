import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({
      username,
      location,
      minRepos,
    });
  };

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleLocationChange = (event) => setLocation(event.target.value);
  const handleMinReposChange = (event) => setMinRepos(event.target.value);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 flex flex-col gap-4 md:flex-row md:items-center bg-gray-100 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        className="p-2 rounded border w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
        className="p-2 rounded border w-full"
      />
      <input
        type="number"
        placeholder="Min Repos"
        value={minRepos}
        onChange={handleMinReposChange}
        className="p-2 rounded border w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
