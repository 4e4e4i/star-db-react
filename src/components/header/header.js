import React from 'react';

import './header.scss'

const Header = ({ onServiceChange }) => {

    return(
        <div className="header">
            <h3 className="header__title">
                <a href="#/">StarDB</a>
            </h3>
            <nav className="header__navigation">
                <ul className="d-flex">
                    <li>
                        <a href="#/people">People</a>
                    </li>
                    <li>
                        <a href="#/planets">Planets</a>
                    </li>
                    <li>
                        <a href="#/starships">Starships</a>
                    </li>
                </ul>
            </nav>
            <button
                className="btn btn-primary btn-sm"
                onClick={onServiceChange}>
                Change Service
            </button>
        </div>
    );
};

export default Header;
