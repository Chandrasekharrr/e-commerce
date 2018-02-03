import React from 'react';
import SearchBar from './SearchBar';

const Header = ({brand, backToHome, singlePage, dataContent}) => {
    
    let showSearch = () => (!singlePage || singlePage === false ? <SearchBar data={dataContent} /> : '')

    return (
        <div className="navbar">
			<ul>
				<li><span className="navbar-brand" onClick={backToHome} >hastro</span></li>
				<li className="search-bar">
					{showSearch()}
				</li>
			</ul>
		</div>
    )
}

export default Header;