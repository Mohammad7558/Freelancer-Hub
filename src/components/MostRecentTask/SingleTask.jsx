import React from "react";
import { Link } from "react-router-dom";

const SingleTask = ({ singleTask }) => {
  const { category, deadline, description, title, userEmail, userName, budget } =
    singleTask;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300">
      <div className="card-body space-y-3">
        <h2 className="card-title text-primary text-xl">📌 {title}</h2>
        <p className="text-sm text-gray-600">📝 {description}</p>
        <div className="mt-2 space-y-2 text-sm">
          <p>
            ⏰ <span className="font-semibold text-neutral">Deadline:</span>{" "}
            {new Date(deadline).toLocaleDateString()}
          </p>
          <p>
            🗂️ <span className="font-semibold text-neutral">Category:</span>{" "}
            <Link
              className="px-3 py-[3px] text-[13px] bg-blue-100 rounded-full mx-3 text-blue-400"
              to=""
            >
              {category}
            </Link>
          </p>
          <p>
            💰 <span className="font-semibold text-neutral">Budget: </span>
            {budget ? `$${budget}` : "Not specified"}
          </p>
          <div className="border-t pt-2 mt-5">
            <p className="font-semibold text-neutral">Assigned by:</p>
            <p className="text-gray-800">{userName}</p>
            <p className="text-gray-500 italic text-xs">{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
