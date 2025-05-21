import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FiCalendar,
  FiUser,
  FiTag,
  FiMail,
  FiDollarSign,
} from "react-icons/fi";

const BrowseTaskDetails = () => {
  const singleTaskDetails = useLoaderData();
  const {
    _id,
    category,
    deadline,
    description,
    title,
    userEmail,
    userName,
    budget,
    bidsCount,
  } = singleTaskDetails;

  const [bidsCounts, setBidsCounts] = useState(bidsCount);

  const handleBidsCount = () => {
    const bidsCountsToNumber = parseInt(bidsCounts);
    const newBidsCounts = bidsCountsToNumber + 1;
    setBidsCounts(newBidsCounts);

    fetch(`http://localhost:5000/allTasks/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ bidsCount: newBidsCounts })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  };

  return (
    <div className="min-h-screen py-12 px-4 transition-colors duration-500">
      {/* Top message */}
      <div className="max-w-3xl mx-auto mb-4 text-center text-lg font-medium text-blue-700 dark:text-cyan-400 transition-colors duration-300">
        You bid for {bidsCounts} opportunities.
      </div>

      {/* Task details card */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm dark:shadow-lg p-8 transition-colors duration-300">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">{title}</h1>

        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <FiUser className="text-blue-600 dark:text-cyan-400" />
            <span className="font-medium text-gray-800 dark:text-gray-100">{userName}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-blue-600 dark:text-cyan-400" />
            <span>{userEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiTag className="text-blue-600 dark:text-cyan-400" />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar className="text-blue-600 dark:text-cyan-400" />
            <span>{deadline}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-blue-600 dark:text-cyan-400" />
            <span>{budget ? `$${budget}` : "Not specified"}</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">Description</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
            <span className="font-medium text-gray-900 dark:text-gray-100">Total Bids:</span>{" "}
            {bidsCounts}
          </div>

          <button
            onClick={handleBidsCount}
            className="inline-flex items-center px-5 py-2 bg-blue-600 dark:bg-cyan-500 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 dark:hover:bg-cyan-600 transition duration-200"
          >
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseTaskDetails;
