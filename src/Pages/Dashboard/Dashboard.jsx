import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSignOut = () => {
    logOutUser()
      .then(() => toast.success("Log Out successfully"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center p-4">
        <button
          className="btn btn-primary btn-square"
          onClick={() => setDrawerOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="btn btn-ghost text-sm">← Home</Link>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-base-100 rounded-lg p-6 shadow-lg sticky top-0 h-screen">
          <Link to="/" className="btn mb-5">← Back to home</Link>

          {/* User Info */}
          <div className="text-center mb-6">
            <div className="avatar mx-auto mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || "https://i.pravatar.cc/150?img=3"} alt="User" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">{user?.displayName || "User Name"}</h2>
            <p className="text-sm text-gray-500 truncate">{user?.email || "user@example.com"}</p>
          </div>

          {/* Navigation */}
          <ul className="menu space-y-2 flex-grow">
            <li><Link to="overview" className="btn btn-ghost justify-start">Overview</Link></li>
            <li><Link to="addTask" className="btn btn-ghost justify-start">Add Task</Link></li>
            <li><Link to={`myPostedTasks/${user?.uid}`} className="btn btn-ghost justify-start">My Posted Tasks</Link></li>
          </ul>

          {/* Logout */}
          <div className="mt-6">
            <button className="btn btn-error btn-outline w-full" onClick={handleSignOut}>Sign Out</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          <div className="bg-base-100 w-64 p-6 flex flex-col gap-4 shadow-lg overflow-y-auto">
            {/* Close & Home */}
            <div className="flex justify-between items-center mb-4">
              <Link to="/" className="btn btn-sm">← Home</Link>
              <button className="btn btn-sm btn-circle btn-ghost" onClick={() => setDrawerOpen(false)}>✕</button>
            </div>

            {/* User Info */}
            <div className="text-center">
              <div className="avatar mx-auto mb-3">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || "https://i.pravatar.cc/150?img=3"} alt="User" />
                </div>
              </div>
              <h2 className="text-lg font-semibold">{user?.displayName || "User Name"}</h2>
              <p className="text-sm text-gray-500 truncate">{user?.email || "user@example.com"}</p>
            </div>

            {/* Navigation */}
            <ul className="menu space-y-2">
              <li><Link to="overview" className="btn btn-ghost w-full justify-start" onClick={() => setDrawerOpen(false)}>Overview</Link></li>
              <li><Link to="addTask" className="btn btn-ghost w-full justify-start" onClick={() => setDrawerOpen(false)}>Add Task</Link></li>
              <li><Link to={`myPostedTasks/${user?.uid}`} className="btn btn-ghost w-full justify-start" onClick={() => setDrawerOpen(false)}>My Posted Tasks</Link></li>
            </ul>

            {/* Logout */}
            <button
              className="btn btn-error btn-outline w-full mt-4"
              onClick={() => {
                handleSignOut();
                setDrawerOpen(false);
              }}
            >
              Sign Out
            </button>
          </div>

          {/* Drawer Overlay */}
          <div
            className="flex-grow"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
