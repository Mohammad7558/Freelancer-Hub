import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white flex items-center justify-center px-6">
      <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl shadow-xl p-10 max-w-2xl text-center">
        <h1 className="text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or may have been moved. Let’s get you back to where you belong.
        </p>
        <Link
          to="/"
          className="btn btn-primary btn-wide"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
