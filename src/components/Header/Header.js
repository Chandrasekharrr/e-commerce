import React from 'react';
import SearchBar from './SearchBar';

const Header = ({brand, backToHome, singlePage, dataContent}) => {
    
    let showSearch = () => (!singlePage || singlePage === false ? <SearchBar data={dataContent} /> : '')

    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo" style={{fontFamily: 'hastro'}} 
                    onClick={backToHome}> <img className="App-logo" /> { brand } </a>
                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Browse</a></li>
                    <li><a href="sass.html"><i className="fa fa-sign-in"></i> Login</a></li>
                </ul>

                {showSearch()}
            </div>
        </nav>
    )
}

export default Header;