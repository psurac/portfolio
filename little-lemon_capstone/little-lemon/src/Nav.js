import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Menu',
            path: '/menu'
        },
        {
            name: 'Reservation',
            path: '/reservation'
        },
        {
            name: 'Order Online',
            path: '/order-online'
        },
        {
            name: 'Login',
            path: '/login'
        },
    ]
    return (
        <nav>
            <ul>
                {links.map( ({name, path}) => (
                    <li><Link to="path">{name}</Link></li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;