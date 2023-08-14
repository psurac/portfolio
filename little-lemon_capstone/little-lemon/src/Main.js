import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About.js';
import Menu from './pages/Menu.js';
import Reservation from './pages/Reservation.js';
import OrderOnline from './pages/OrderOnline.js';
import Login from './pages/Login.js';

function Main() {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/reservation" element={<Reservation />} />
                <Route exact path="/order-online" element={<OrderOnline />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </main>
    );
};

export default Main;