import React, { useState, useEffect, useRef } from 'react';
import { TbSearch } from 'react-icons/tb';
import SearchBar from './SearchBar';

import './Search.css';

export default function Search() {
    const [clicked, setClicked] = useState(false);

    const handleClick = (event) => {
        setClicked(true);
    };

    const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            console.log(event.currentTarget);
            console.log(event.relatedTarget);
            setClicked(false);
        }
    };

    return (
        <button className="search-button" onClick={handleClick} onBlur={handleBlur}>
            { clicked ? <SearchBar /> : <TbSearch className="search-icon" size={25}/>}
        </button>
    )
}
