import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between navbar bg-base-300 w-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> <NavLink to={'/'} className="text-xl text-italic"> Review-iiit </NavLink>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link to={'/add-course'} className="text-lg">Add new course </Link>
          </li>
          <li>
            <Link to={'/login'} className="text-lg"> Login </Link>
          </li>
          <li>
            <Link to={'/register'} className="text-lg text-italic"> Register </Link>
          </li>
        </ul>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Navbar;
