import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const BrowseTasks = () => {
  const taskData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {taskData.length === 0 ? (
        <>
          <div className="text-center my-10 h-[60vh] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold text-gray-600">
              No Tasks Found
            </h1>
            <p className="text-gray-500 mt-2">
              You haven’t posted any tasks yet.
            </p>
            <img className="w-[500px] mt-5" src="https://i.ibb.co/6Rvw7LQG/hand-drawn-no-data-concept-52683-127823.jpg" alt="" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center text-primary mb-10">
            📋 All Tasks
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskData.map((task) => (
              <div
                key={task._id}
                className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="card-body space-y-2">
                  <h2 className="card-title text-lg text-primary font-semibold">
                    📌 {task.title}
                  </h2>
                  <p className="text-sm text-gray-600">📝 {task.description}</p>

                  <div className="text-sm mt-2 space-y-1">
                    <p>
                      ⏰{" "}
                      <span className="font-medium text-neutral">
                        Deadline:
                      </span>
                      {new Date(task.deadline).toLocaleDateString()}
                    </p>
                    <p>
                      🗂️{" "}
                      <span className="font-medium text-neutral">
                        Category:
                      </span>
                      <span className="px-3 py-[3px] text-[13px] text-blue-400 bg-blue-100 rounded-full mx-2">
                        {task.category}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4 border-t pt-2 text-sm">
                    <p className="font-semibold text-neutral">Assigned by:</p>
                    <p className="text-gray-800">{task.userName}</p>
                    <p className="text-gray-500 italic text-xs">
                      {task.userEmail}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link to={`/browseTask/${task._id}`}>
                      <button className="btn btn-outline btn-primary w-full">
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
