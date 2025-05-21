import React from "react";
import { Link } from "react-router-dom";

const SingleTask = ({ singleTask }) => {
  const {
    _id,
    category,
    deadline,
    description,
    title,
    userEmail,
    userName,
    budget,
  } = singleTask;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
      <div className="card-body space-y-3">
        <h2 className="card-title text-primary text-xl dark:text-white">📌 {title}</h2>
        <p className="text-sm text-gray-600 dark:text-white">📝 {description}</p>
        <div className="mt-2 space-y-2 text-sm">
          <p>
            ⏰ <span className="font-semibold text-neutral dark:text-white">Deadline:</span>{" "}
            {new Date(deadline).toLocaleDateString()}
          </p>
          <p>
            🗂️ <span className="font-semibold text-neutral dark:text-white">Category:</span>{" "}
            <Link
              className="px-3 py-[3px] text-[13px] bg-blue-100 rounded-full mx-3 text-blue-400 dark:text-black"
              to=""
            >
              {category}
            </Link>
          </p>
          <p>
            💰 <span className="font-semibold text-neutral dark:text-white">Budget: </span>
            {budget ? `$${budget}` : "Not specified"}
          </p>
          <div className="border-t border-gray-300 dark:border-white pt-4 mt-6">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide dark:text-white">
              Assigned by
            </p>
            <p className="mt-1 text-gray-900 font-semibold dark:text-white">{userName}</p>
            <p className="text-gray-500 italic text-xs dark:text-white">{userEmail}</p>
          </div>
          <Link to={`/details/${_id}`}><button className="btn bg-green-800 text-white">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
