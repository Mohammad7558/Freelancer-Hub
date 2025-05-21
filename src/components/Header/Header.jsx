import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../../../src/assets/Logo.png";
import { AuthContext } from "../../provider/AuthContext";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);

  const logout = () => {
    logOutUser()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <>
      <nav className="bg-gray-100 shadow py-4">
        <section className="w-11/12 mx-auto flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>
          <div className="hidden lg:flex gap-x-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn bg-green-800 text-white" : "btn"
              }
              to="/"
            >
              Home
            </NavLink>
            {user && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn bg-green-800 text-white" : "btn"
                  }
                  to="/addTask"
                >
                  Add Task
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn bg-green-800 text-white" : "btn"
                  }
                  to={`/myPostedTasks/${user?.uid}`}
                >
                  My Posted Task
                </NavLink>
              </>
            )}

            <NavLink
              className={({ isActive }) =>
                isActive ? "btn bg-green-800 text-white" : "btn"
              }
              to="/browseTask"
            >
              Browse Task
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="avatar cursor-pointer">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/2yVVxYk/default-avatar.png"
                      }
                      alt="User Avatar"
                    />
                  </div>
                </div>
                {dropdownOpen && (
                  <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg p-3 w-48 z-50">
                    <p className="text-sm font-semibold mb-2 text-gray-700">
                      {user.displayName || "User"}
                    </p>
                    <button
                      onClick={logout}
                      className="btn btn-sm btn-error text-white w-full"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn bg-green-800 text-white hidden lg:inline-flex"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline text-black hidden lg:inline-flex"
                >
                  Signup
                </Link>
              </>
            )}

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <button
              className="lg:hidden text-2xl"
              onClick={() => setDrawerOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </section>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          <button
            onClick={() => setDrawerOpen(false)}
            className="btn btn-circle"
          >
            <FaX />
          </button>
          <NavLink
            onClick={() => setDrawerOpen(false)}
            className={({ isActive }) =>
              isActive ? "btn btn-primary w-full" : "btn w-full"
            }
            to="/"
          >
            Home
          </NavLink>

          {user && (
            <>
              <NavLink
                onClick={() => setDrawerOpen(false)}
                className={({ isActive }) =>
                  isActive ? "btn btn-primary w-full" : "btn w-full"
                }
                to="/addTask"
              >
                Add Task
              </NavLink>
              <NavLink
                onClick={() => setDrawerOpen(false)}
                className={({ isActive }) =>
                  isActive ? "btn btn-primary w-full" : "btn w-full"
                }
                to={`/myPostedTasks/${user?.uid}`}
              >
                My Posted Task
              </NavLink>
            </>
          )}

          <NavLink
            onClick={() => setDrawerOpen(false)}
            className={({ isActive }) =>
              isActive ? "btn btn-primary w-full" : "btn w-full"
            }
            to="/browseTask"
          >
            Browse Task
          </NavLink>

          {user ? (
            <button
              onClick={() => {
                logout();
                setDrawerOpen(false);
              }}
              className="btn btn-error w-full text-white"
            >
              Log out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setDrawerOpen(false)}
                className="btn btn-outline w-full"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setDrawerOpen(false)}
                className="btn btn-primary w-full"
              >
                Signup
              </Link>
            </>
          )}

          {/* Theme Switcher in Drawer */}
          <div className="pt-2">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />
              {/* Sun Icon */}
              <svg
                className="swap-off h-6 w-6 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1...Z" />
              </svg>
              {/* Moon Icon */}
              <svg
                className="swap-on h-6 w-6 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0...Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-30 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
