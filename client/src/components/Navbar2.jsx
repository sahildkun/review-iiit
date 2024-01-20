import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <header className="bg-white border-4 rounded-full shadow-2xl">
        <nav className="flex justify-between items-center w-full mx-auto">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/IIIT-H_logo.png" alt="..."></img>
            </div>
            <div className="md:static absolute bg-white md:min-h-fit min-h-60vh left-0 -top-100 md:w-auto w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-4vm gap-8">
                    <li>
                        <Link to='/' className="hover:text-gray-400">Add New Course</Link>
                    </li>
                    <li>
                        <Link to='/'>Login</Link>
                    </li>
                    <li>
                        <Link to='/'>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <Outlet/>
    </>
  );
};

export default Navbar;