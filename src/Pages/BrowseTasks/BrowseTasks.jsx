import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const BrowseTasks = () => {
  const taskData = useLoaderData();

  return (
    <div className=" mx-auto px-4 py-8 min-h-screen bg-white dark:bg-gray-800 transition-colors duration-500">
      {taskData.length === 0 ? (
        <div className="text-center my-10 h-[60vh] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
            No Tasks Found
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            You haven’t posted any tasks yet.
          </p>
          <img
            className="w-[400px] mt-5 opacity-80"
            src="https://i.ibb.co/TDQrPfG2/hand-drawn-no-data-concept-52683-127823-removebg-preview.png"
            alt="No data illustration"
          />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center text-primary dark:text-cyan-400 mb-10 transition-colors duration-300">
            📋 All Tasks
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskData.map((task) => (
              <div
                key={task._id}
                className="card bg-white dark:bg-gray-800 shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl dark:hover:shadow-gray-800 transition-shadow duration-300"
              >
                <div className="card-body space-y-3 p-5">
                  <h2 className="card-title text-lg font-semibold flex items-center gap-2 text-primary dark:text-cyan-400 transition-colors duration-300">
                    📌 <span>{task.title}</span>
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    📝 {task.description}
                  </p>

                  <div className="text-sm mt-2 space-y-1 text-gray-700 dark:text-gray-400">
                    <p>
                      ⏰{" "}
                      <span className="font-medium text-gray-800 dark:text-gray-300">
                        Deadline:
                      </span>{" "}
                      {new Date(task.deadline).toLocaleDateString()}
                    </p>
                    <p className="flex items-center gap-2">
                      🗂️{" "}
                      <span className="font-medium text-gray-800 dark:text-gray-300">
                        Category:
                      </span>
                      <span className="px-3 py-[3px] text-xs text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full select-none">
                        {task.category}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3 text-sm text-gray-800 dark:text-gray-300">
                    <p className="font-semibold">Assigned by:</p>
                    <p>{task.userName}</p>
                    <p className="italic text-xs text-gray-500 dark:text-gray-400">
                      {task.userEmail}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link to={`/browseTask/${task._id}`}>
                      <button className="btn btn-outline btn-primary dark:btn-outline-cyan-400 w-full text-primary dark:text-cyan-400 hover:bg-primary hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition">
                        🔍 See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BrowseTasks;
