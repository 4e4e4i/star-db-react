import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'

const Header = ({ onServiceChange }) => {

    return(
        <div className="header">
            <h3 className="header__title">
                <Link to="/">StarDB</Link>
            </h3>
            <nav className="header__navigation">
                <ul className="d-flex">
                    <li>
                        <Link to="/people/">People</Link>
                    </li>
                    <li>
                        <Link to="/planets/">Planets</Link>
                    </li>
                    <li>
                        <Link to="/starships/">Starships</Link>
                    </li>
                    {/*<li>*/}
                        {/*<Link to="/login">Login</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<Link to="/secret">Secret</Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>
            {/*<button*/}
                {/*className="btn btn-primary btn-sm"*/}
                {/*onClick={onServiceChange}>*/}
                {/*Change Service*/}
            {/*</button>*/}
        </div>
    );
};

export default Header;
