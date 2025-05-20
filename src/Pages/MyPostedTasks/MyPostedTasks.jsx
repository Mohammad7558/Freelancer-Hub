import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePostedTask from "./SinglePostedTask";

const MyPostedTasks = () => {
  const userData = useLoaderData();

  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
        My Posted Tasks
      </h2>

      {userData.length === 0 ? (
        <div className="text-center mt-10">
          <h1 className="text-3xl font-semibold text-gray-600">No Posted Tasks Found</h1>
          <p className="text-gray-500 mt-2">You haven’t posted any tasks yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-md bg-white">
          <table className="table table-zebra w-full text-sm md:text-base">
            <thead className="bg-base-200 text-base font-semibold text-gray-800">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Deadline</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((singleData) => (
                <SinglePostedTask key={singleData._id} singleData={singleData} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPostedTasks;
