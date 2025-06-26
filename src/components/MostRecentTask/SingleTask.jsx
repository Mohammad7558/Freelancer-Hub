import React from "react";
import { Link } from "react-router-dom";

const SingleTask = ({ singleTask }) => {
  const {
    _id,
    description,
    title,
    userEmail,
    userName,
  } = singleTask;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
      <div className="card-body space-y-3">
        <h2 className="card-title text-primary text-xl">📌 {title}</h2>
        <p className="text-sm">
          📝{" "}
          {description.length > 100 ? (
            <>
              {description.slice(0, 100).trim()}…
              <Link to={`/details/${_id}`} className="link ml-1 text-blue-500">Click Show Detail Button</Link>
            </>
          ) : (
            description
          )}
        </p>

        <div className="mt-2 space-y-2 text-sm">
          
          <div className="border-t border-gray-300 pt-4 mt-6">
            <p className="text-sm font-medium uppercase tracking-wide">
              Assigned by
            </p>
            <p className="mt-1 font-semibold">{userName}</p>
            <p className="text-gray-500 italic text-xs">{userEmail}</p>
          </div>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-green-800 text-white">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
