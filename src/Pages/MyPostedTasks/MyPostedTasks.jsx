import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
        <div className="flex flex-col justify-center items-center text-center bg-transparent rounded-2xl shadow p-6">
          <h1 className="text-4xl font-bold mb-2">
            No Tasks Posted
          </h1>
          <p className="mb-6">
            It looks like you haven’t posted any tasks yet. Start by adding your
            first task.
          </p>
          <img
            className="w-80 md:w-[400px] lg:w-[500px] mb-6 opacity-90"
            src="https://i.ibb.co/TDQrPfG2/hand-drawn-no-data-concept-52683-127823-removebg-preview.png"
            alt="No data illustration"
          />
          <Link
            to="/addTask"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition rounded-xl shadow-lg"
          >
            👈 Add Your Own Task
          </Link>
        </div>
      ) : (
        <div className="h-[70vh]">
          <div className="overflow-x-auto rounded-xl shadow-md mx-10 mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
              My Posted Tasks
            </h2>
            <table className="table table-zebra text-sm md:text-base">
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
        </div>
      )}
    </div>
  );
};

export default MyPostedTasks;
