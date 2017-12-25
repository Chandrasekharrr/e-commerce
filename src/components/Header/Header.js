import React from 'react';

const Header = ({Brand}) => (
    <nav>
        <div className="nav-wrapper">
            <a className="brand-logo" style={{fontFamily: 'hastro'}}> <img className="App-logo" /> { Brand } </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>
    </nav>
)

export default Header;