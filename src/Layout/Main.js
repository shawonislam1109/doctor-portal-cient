import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Foote';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;