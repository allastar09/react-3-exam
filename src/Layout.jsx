import React from 'react';
import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
        <nav className='flex p-[20px] items-center justify-evenly gap-[20px] bg-[#FEDAD5]'>
      <Link to="/about">About</Link>
      <Link to='/course'>Course</Link>
      <Link to='/'>Events</Link>
      <Link>BLog </Link>
      <Link>Contacts</Link>
      <div className='flex gap-[10px] items-center '>
      <button className='w-[150px] h-[52px] bg-[#FF3F3A] text-[white] rounded-[10px]'>Get consultation</button>
      <p className='text-[#424551] text-[16px]'>Log in / Register</p>
      </div>
        </nav>
      <Outlet />
    </div>
  );
};

export default Layout;