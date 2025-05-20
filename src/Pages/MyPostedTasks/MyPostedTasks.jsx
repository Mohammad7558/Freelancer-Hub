import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePostedTask from "./SinglePostedTask";

const MyPostedTasks = () => {
  const userData = useLoaderData();
  console.log(userData);
  return (
    <div className="overflow-x-auto p-4">
      {userData.length === 0 ? (
        <>
        <h1 className="text-3xl font-bold text-center">No Posted Task</h1>
        </>
      ) : (
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((singleData) => (
              <SinglePostedTask key={singleData._id} singleData={singleData} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyPostedTasks;
