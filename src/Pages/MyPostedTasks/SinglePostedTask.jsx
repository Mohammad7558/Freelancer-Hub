import React from "react";
import { Link } from "react-router-dom";

const SinglePostedTask = ({ singleData, handleDeleteUserTaskData }) => {
  const { _id, title, category, deadline, budget, bidsCount } = singleData;

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
      <td className="font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
        {title}
      </td>
      <td className="text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {category}
      </td>
      <td className="text-green-600 dark:text-green-400 font-semibold whitespace-nowrap">
        ${budget}
      </td>
      <td className="text-gray-600 dark:text-gray-400 whitespace-nowrap">
        {deadline}
      </td>
      <td className="text-center flex items-center justify-center gap-2">
        <Link to={`/update/${_id}`}>
          <button className="btn btn-sm btn-outline btn-primary transition-transform hover:scale-105 dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-600 dark:hover:text-white">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDeleteUserTaskData(_id)}
          className="btn btn-sm btn-outline btn-error transition-transform hover:scale-105 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-600 dark:hover:text-white"
        >
          Delete
        </button>
        <button className="btn btn-sm btn-outline btn-accent transition-transform hover:scale-105 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-600 dark:hover:text-white">
          Bids
        </button>
        <span className="inline-block bg-accent dark:bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md select-none">
          {bidsCount || 0}
        </span>
      </td>
    </tr>
  );
};

export default SinglePostedTask;
