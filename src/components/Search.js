import { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbSearch } from 'react-icons/tb'
import React from 'react'
import {  } from 'bootstrap';
import SearchBar from './SearchBar';
import './Search.css';

function SearchState ({isClicked}) {
    if (isClicked) {
        return <SearchBar />
    }
    return <TbSearch className="search-icon" size={30}/>
}

export default function Search() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        // <button onClick={handleClick}><SearchState isClicked={clicked} /></button>
        <button className="search-button" onClick={handleClick}>
            { clicked ? <SearchBar /> : <TbSearch className="search-icon" size={30}/>}
        </button>
    )
}
