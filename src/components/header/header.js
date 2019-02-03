import React from 'react';

import './header.scss'

const Header = () => {

    return(
        <div className="header">
            <h3 className="header__title">
                <a href="#">StarDB</a>
            </h3>
            <nav className="header__navigation">
                <ul className="d-flex">
                    <li>
                        <a href="#">People</a>
                    </li>
                    <li>
                        <a href="#">Planets</a>
                    </li>
                    <li>
                        <a href="#">Starships</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
