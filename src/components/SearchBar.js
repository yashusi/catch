import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

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
      <button className="search-submit" type="submit"><FaSearch size={23}/></button>
    </form>
  );
}
