import { useState } from 'react';

const inputs = [
  { placeholder: 'Username', key: 'username', type: 'text' },
  { placeholder: 'Location', key: 'location', type: 'text' },
  { placeholder: 'Min Repos', key: 'minRepos', type: 'number' },
];

const Search = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: '',
  });

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 0)); 
    onSearch(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 flex flex-col gap-4 md:flex-row md:items-center bg-gray-100 rounded-lg shadow-md"
    >
      {inputs.map(({ placeholder, key, type }) => (
        <input
          key={key}
          type={type}
          placeholder={placeholder}
          value={formData[key]}
          onChange={handleChange(key)}
          className="p-2 rounded border w-full"
        />
      ))}
      {formData.username && (
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      )}
    </form>
  );
};

export default Search;
