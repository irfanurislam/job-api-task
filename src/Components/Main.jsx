import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
              <header>
        <nav className='flex justify-center items-center'>
          <ul className='flex justify-center items-center gap-5 mt-10'>
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li>
              <Link  to="/joblistpage">Job List</Link>
            </li>
            <li>
              <Link  to="/login">Login</Link>
            </li>
            <li>
              <Link  to="/signup">Sign Up</Link>
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>
      </header>
        <Outlet></Outlet>
        <h2>THis is our Footer</h2>
          
        </div>
    );
};

export default Main;