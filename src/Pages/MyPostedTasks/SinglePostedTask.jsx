import React from "react";
import { Link } from "react-router-dom";

const SinglePostedTask = ({ singleData, handleDeleteUserTaskData }) => {
  const { _id, title, category, deadline, budget, bidsCount } = singleData;

  return (
    <tr className="hover:bg-base-100 transition duration-200">
      <td className="font-medium text-gray-900 whitespace-nowrap">{title}</td>
      <td className="text-gray-700 whitespace-nowrap">{category}</td>
      <td className="text-green-600 font-semibold whitespace-nowrap">
        ${budget}
      </td>
      <td className="text-gray-600 whitespace-nowrap">{deadline}</td>
      <td className="text-center flex items-center justify-center gap-2">
        <Link to={`/update/${_id}`}>
          <button className="btn btn-sm btn-outline btn-primary transition-transform hover:scale-105">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDeleteUserTaskData(_id)}
          className="btn btn-sm btn-outline btn-error transition-transform hover:scale-105"
        >
          Delete
        </button>
        <button className="btn btn-sm btn-outline btn-accent transition-transform hover:scale-105">
          Bids
        </button>
        <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md select-none">
          {bidsCount || 0}
        </span>
      </td>
    </tr>
  );
};

export default SinglePostedTask;
