import { useContext } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AuthContext from "../context/AuthContext/AuthContext";
const NavBar = () => {
  const { user, setUser, signOutUser } = useContext(AuthContext);

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
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white px-3 py-2 rounded-md"
              : "hover:text-blue-600"
          }
        >
          Pages
        </NavLink>
      </li>
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
