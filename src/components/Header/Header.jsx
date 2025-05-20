import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../../../src/assets/Logo.png";
import { AuthContext } from "../../provider/AuthContext";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
      {/* Top Navbar */}
      <nav className="bg-gray-100 backdrop-blur-2xl shadow py-4">
        <section className="w-11/12 mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-x-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn bg-green-800 text-white" : "btn"
              }
              to="/"
            >
              Home
            </NavLink>

            {/* Show only if user is logged in */}
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

            {/* Always visible */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn bg-green-800 text-white" : "btn"
              }
              to="/browseTask"
            >
              Browse Task
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                {/* User Avatar with Tooltip */}
                <div className="tooltip tooltip-left" data-tip={user.displayName}>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user.photoURL} alt="User Avatar" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="btn bg-red-500 normal-case text-white hidden lg:inline-flex"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn bg-green-800 text-white hidden lg:inline-flex">
                  Login
                </Link>
                <Link to="/register" className="btn btn-outline text-black hidden lg:inline-flex">
                  Signup
                </Link>
              </>
            )}

            {/* Hamburger Menu */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setDrawerOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </section>
      </nav>

      {/* Drawer Sidebar */}
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

          {/* Mobile Nav Links */}
          <NavLink
            onClick={() => setDrawerOpen(false)}
            className={({ isActive }) =>
              isActive ? "btn btn-primary w-full" : "btn w-full"
            }
            to="/"
          >
            Home
          </NavLink>

          {/* Show only if user is logged in */}
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

          {/* Always visible */}
          <NavLink
            onClick={() => setDrawerOpen(false)}
            className={({ isActive }) =>
              isActive ? "btn btn-primary w-full" : "btn w-full"
            }
            to="/browseTask"
          >
            Browse Task
          </NavLink>

          {/* Conditional Buttons for Drawer */}
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
