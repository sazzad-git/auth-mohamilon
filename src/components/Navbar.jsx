import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //   console.log(user, logOut);

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut()
      .then(() => {
        console.log("sign out successfully");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("error", error.message);
        // An error happened.
      });
  };

  const navNavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Registration</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navNavLinks}
          </ul>
        </div>
        <NavLink to="/" className="text-xl btn btn-ghost">
          Moha Milon
        </NavLink>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navNavLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user.email}</span>
            <a href="" className="btn btn-sm" onClick={handleLogOut}>
              SignOut
            </a>
          </>
        ) : (
          <Link to="/login">
            <button href="" className="btn btn-sm">
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
