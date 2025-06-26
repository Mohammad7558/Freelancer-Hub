import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthContext";
import { FiMoon, FiSun } from "react-icons/fi";
import toast from "react-hot-toast";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const logout = () => {
    logOutUser()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error("Logout error: " + error.message));
  };

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <nav className="border-b border-base-300">
        <section className="w-11/12 mx-auto flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FreelanceHub
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm btn-primary text-white"
                  : "btn btn-sm btn-ghost"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUS"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm btn-primary text-white"
                  : "btn btn-sm btn-ghost"
              }
            >
              About
            </NavLink>
            {user && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-sm btn-primary text-white"
                    : "btn btn-sm btn-ghost"
                }
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              to="/browseTask"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm btn-primary text-white"
                  : "btn btn-sm btn-ghost"
              }
            >
              Browse Tasks
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm btn-primary text-white"
                  : "btn btn-sm btn-ghost"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative group">
                <div className="avatar cursor-pointer">
                  <div className="w-9 rounded-full ring ring-primary">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/2yVVxYk/default-avatar.png"
                      }
                      alt="User Avatar"
                      className="hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="absolute top-12 right-0 bg-base-100 border border-base-300 shadow-lg rounded-box p-3 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <p className="text-sm font-semibold mb-2 truncate">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={logout}
                    className="btn btn-sm btn-error text-white w-full"
                  >
                    Log out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-sm btn-ghost hidden lg:inline-flex"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-sm btn-primary text-white hidden lg:inline-flex"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* Theme Toggle */}
            <label className="swap swap-rotate btn btn-sm btn-circle btn-ghost">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "dark"}
                className="hidden"
              />
              <FiSun className="swap-off h-5 w-5" />
              <FiMoon className="swap-on h-5 w-5" />
            </label>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden btn btn-sm btn-circle btn-ghost"
              onClick={() => setDrawerOpen(true)}
            >
              <FaBars className="text-lg" />
            </button>
          </div>
        </section>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-base-100 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center mb-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FreelanceHub
              </h1>
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              className="btn btn-sm btn-circle btn-ghost"
            >
              <FaX />
            </button>
          </div>

          {[
            { to: "/", label: "Home" },
            { to: "/dashboard", label: "Dashboard", show: user },
            { to: "/browseTask", label: "Browse Tasks" },
            { to: "/aboutUS", label: "About" },
            { to: "/contact-us", label: "Contact" },
          ]
            .filter((item) => item.show === undefined || item.show)
            .map(({ to, label }) => (
              <NavLink
                key={to}
                onClick={() => setDrawerOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-primary btn-sm w-full"
                    : "btn btn-ghost btn-sm w-full"
                }
                to={to}
              >
                {label}
              </NavLink>
            ))}

          {user ? (
            <button
              onClick={() => {
                logout();
                setDrawerOpen(false);
              }}
              className="btn btn-sm btn-error text-white w-full mt-4"
            >
              Log out
            </button>
          ) : (
            <div className="flex gap-2 mt-4">
              <Link
                to="/login"
                onClick={() => setDrawerOpen(false)}
                className="btn btn-sm btn-ghost flex-1"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setDrawerOpen(false)}
                className="btn btn-sm btn-primary text-white flex-1"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
