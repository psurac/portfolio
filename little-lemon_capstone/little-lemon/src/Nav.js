import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </Router>‚
        </nav>
    );
};

export default Nav;