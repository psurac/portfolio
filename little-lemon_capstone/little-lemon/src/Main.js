import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';

function Main() {
    return (
            <main>
                <Router>
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/menu" component={Menu} />
                        <Route exact path="/reservation" component={Reservation} />
                        <Route exact path="/order-online" component={OrderOnline} />
                        <Route exact path="/login" component={Login} />
                    </Routes>
                </Router>
            </main>
        );
};

export default Main;