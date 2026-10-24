import React from 'react';
import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
        <nav className='flex p-[20px] items-center justify-center gap-[20px]'>
      <Link to="/home">Home</Link>
      <Link to='/catalog'>catalog</Link>
      <Link to='/'></Link>
        </nav>
      <Outlet />
    </div>
  );
};

export default Layout;