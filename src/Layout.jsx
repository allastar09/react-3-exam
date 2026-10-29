import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <nav className="flex p-[20px] items-center justify-evenly gap-[20px]">
        <Link to="/about">About</Link>
        <Link to="/Course">Course</Link>
        <Link to="/product">Products</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout