import React from "react";
import { Link } from "react-router-dom";

const SinglePostedTask = ({ singleData, handleDeleteUserTaskData }) => {
  const { _id, title, category, deadline, budget, bidsCount } = singleData;

  return (
    <tr className="hover:bg-base-200 transition duration-200">
      <td className="font-medium text-base-content whitespace-nowrap">
        {title}
      </td>
      <td className="text-base-content/80 whitespace-nowrap">
        {category}
      </td>
      <td className="text-success font-semibold whitespace-nowrap">
        ${budget}
      </td>
      <td className="text-base-content/60 whitespace-nowrap">
        {deadline}
      </td>
      <td className="text-center flex items-center justify-center gap-2">
        <Link to={`/update/${_id}`}>
          <button className="btn btn-sm btn-outline btn-primary hover:scale-105 transition-transform">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDeleteUserTaskData(_id)}
          className="btn btn-sm btn-outline btn-error hover:scale-105 transition-transform"
        >
          Delete
        </button>
        <button className="btn btn-sm btn-outline btn-accent hover:scale-105 transition-transform">
          Bids
        </button>
        <span className="inline-block bg-accent text-accent-content text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none">
          {bidsCount || 0}
        </span>
      </td>
    </tr>
  );
};

export default SinglePostedTask;
