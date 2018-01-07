import React from 'react';
import {post} from '../../../api/dummyData.json';

const SearchBar = () => {
    return (
        <form className="inline">
            <input className="searchBar" type="search" required placeholder="search" />
        </form>
    )
}

export default SearchBar;