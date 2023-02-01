import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Needs implementation
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="search-field"
        type="text"
        placeholder=" Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-submit" type="submit"><FaSearch size={20}/></button>
    </form>
  );
}
