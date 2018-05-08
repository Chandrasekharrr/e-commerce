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
        <div className="search-bar">
            <input type="text" name="cari" placeholder="Looking for something ?" />
            <button type="submit" className="btn add-on"><i className="fa fa-search"></i></button>
        </div>
    )
}

export default SearchBar;