import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SinglePostedTask from "./SinglePostedTask";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyPostedTasks = () => {
  const userData = useLoaderData();
  const [separateUserData, setSeparateUserData] = useState(userData);

  const handleDeleteUserTaskData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allTasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success("Task Deleted successfully");
              const remainingUsersTask = separateUserData.filter(
                (singleData) => singleData._id !== id
              );
              setSeparateUserData(remainingUsersTask);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {separateUserData.length === 0 ? (
        <div className="text-center my-10 h-[60vh] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
            No Posted Tasks Found
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            You haven’t posted any tasks yet.
          </p>
          <img
            className="w-[500px] mt-5"
            src="https://i.ibb.co/TDQrPfG2/hand-drawn-no-data-concept-52683-127823-removebg-preview.png"
            alt="No Data Illustration"
          />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary dark:text-cyan-400">
            My Posted Tasks
          </h2>
          <table className="table table-zebra w-full text-sm md:text-base">
            <thead className="bg-gray-100 dark:bg-gray-700 text-base font-semibold text-gray-800 dark:text-gray-200">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Budget</th>
                <th>Deadline</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {separateUserData.map((singleData) => (
                <SinglePostedTask
                  key={singleData._id}
                  singleData={singleData}
                  handleDeleteUserTaskData={handleDeleteUserTaskData}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPostedTasks;
