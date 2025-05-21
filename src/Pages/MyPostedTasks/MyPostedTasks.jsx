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
    <div className="p-4">
      {separateUserData.length === 0 ? (
        <div className="text-center my-10 h-[60vh] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold text-gray-600">
            No Posted Tasks Found
          </h1>
          <p className="text-gray-500 mt-2">
            You haven’t posted any tasks yet.
          </p>
          <img className="w-[500px] mt-5" src="https://i.ibb.co/6Rvw7LQG/hand-drawn-no-data-concept-52683-127823.jpg" alt="" />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
            My Posted Tasks
          </h2>
          <table className="table table-zebra w-full text-sm md:text-base">
            <thead className="bg-base-200 text-base font-semibold">
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
