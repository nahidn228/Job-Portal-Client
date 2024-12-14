import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AuthContext from "../context/AuthContext/AuthContext";
const NavBar = () => {
  const { user, setUser, signOutUser } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check and set the theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);
  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    // Store the selected theme in localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    // Toggle the dark mode class on the body element
    // Set the theme on the <html> tag for better global control
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign-out successful.");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-job"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          Find a Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myApplication"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          My Application
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-job"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          Add a Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myPostedJob"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          My Posted Job
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/viewApplications"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          View Applications
        </NavLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 mr-2 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25v19.5M4.5 8.25L12 2.25l7.5 6M4.5 15.75L12 21.75l7.5-6"
            />
          </svg>
          {/* <img
            src="https://img.icons8.com/?size=100&id=oB6QnNVwuoN8&format=png&color=000000"
            alt=""
          /> */}
          <Typewriter
            words={["Job Portal"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 font-medium text-gray-700 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-4 font-medium text-gray-700">
        <label onChange={handleThemeToggle} className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" checked={isDarkMode} readOnly />

          {/* sun icon */}
          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <>
            <span className="font-medium text-gray-600">
              {user.displayName}
            </span>
            <button
              onClick={handleSignOut}
              className="btn btn-xs sm:btn-sm md:btn-md btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:text-blue-600"
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-3 py-2 rounded-md"
                  : "hover:text-blue-600"
              }
            >
              Sign in
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
