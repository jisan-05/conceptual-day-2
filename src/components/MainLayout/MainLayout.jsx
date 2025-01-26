import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h2>I am main Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;