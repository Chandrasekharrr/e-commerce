import React from 'react';
import {post} from '../../../api/dummyData.json';

const SearchBar = ({data}) => {

    
    
    let searchItem = (keyword, data) => {
        
        return data.filter(item => {
            const regex = new RegExp(keyword, 'gi')
            return item.title.match(regex)
        })
    }

    return (
        <form className="inline">
            <input className="searchBar" type="search" required placeholder="search" />
        </form>
    )
}

export default SearchBar;