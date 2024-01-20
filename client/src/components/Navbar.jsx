import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <div className="flex justify-between navbar bg-base-300 w-full">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> <Link to={'/'} className="text-xl text-italic"> review-iiit </Link>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ThemeToggle />
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
  );
};

export default Navbar;
