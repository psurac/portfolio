import React from 'react';
import { Link } from 'react-router-dom';
import { useSitesContext } from './context/SitesContext.js';

function Nav() {
    const sites = useSitesContext();
    return (
        <nav>
            <ul>
                {sites.map( ({name, path}) => (
                    <li key={name}><Link to={path}>{name}</Link></li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;