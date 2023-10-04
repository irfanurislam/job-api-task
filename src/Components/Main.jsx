import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
             <h2>THis is our Navbar</h2>
        <Outlet></Outlet>
        <h2>THis is our Footer</h2>
          
        </div>
    );
};

export default Main;