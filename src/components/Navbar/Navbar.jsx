import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { handleLogout, user } = useContext(authContext);

    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/alltreatments">All Treatments</NavLink>
            </li>
            <li>
                <NavLink to="/myappointments">My appointments</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
        </>
    );

    const signOut = () => {
        handleLogout();
    };

    return (
        <div>
            <div className="navbar bg-blue-900 shadow-sm text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        TEETH WIZARD
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {user ? (
                            <div className="flex gap-2">
                                <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full" />
                                <button onClick={signOut} className="btn">
                                    SignOut
                                </button>
                            </div>
                        ) : (
                            <div>
                                <Link to="/login">
                                    <button className="btn bg-blue-500 border-none shadow-none text-white">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
