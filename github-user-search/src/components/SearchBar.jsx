import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <input
      type="text"
      placeholder="Search GitHub users..."
      value={query}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
