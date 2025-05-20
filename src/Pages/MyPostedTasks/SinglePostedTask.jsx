import React from "react";

const SinglePostedTask = ({ singleData }) => {
  const { title, category, deadline, budget } = singleData;

  return (
    <tr className="hover">
      <td className="font-medium text-gray-700">{title}</td>
      <td className="text-gray-600">{category}</td>
      <td className="text-gray-600">${budget}</td>
      <td className="text-gray-600">{deadline}</td>
      <td className="flex flex-wrap gap-2 mt-2 md:mt-0">
        <button className="btn btn-outline btn-primary">Update</button>
        <button className="btn btn-outline btn-error">Delete</button>
        <button className="btn btn-outline btn-accent">Bids</button>
      </td>
    </tr>
  );
};

export default SinglePostedTask;
