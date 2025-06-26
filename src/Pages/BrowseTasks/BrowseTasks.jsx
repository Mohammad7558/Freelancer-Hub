import React, { useState } from "react";
import { Flip, Slide } from "react-awesome-reveal";
import { useLoaderData, Link, } from "react-router-dom";

const BrowseTasks = () => {
  const initialTaskData = useLoaderData();
  const [taskData, setTaskData] = useState(initialTaskData);
  const [sortOption, setSortOption] = useState("");

  const handleSort = async (option) => {
    setSortOption(option);
    try {
      const response = await fetch(`https://assignment-10-server-side-psi-eight.vercel.app/browseTask?sort=${option}`);
      const data = await response.json();
      setTaskData(data);
    } catch (error) {
      console.error("Error sorting tasks:", error);
    }
  };

  return (
    <div className="mx-auto px-4 py-8 min-h-screen transition-colors duration-500">
      {taskData.length === 0 ? (
        <div className="text-center my-10 h-[60vh] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold">No Tasks Found</h1>
          <p className="mt-2">You haven't posted any tasks yet.</p>
          <img
            className="w-[400px] mt-5 opacity-80"
            src="https://i.ibb.co/TDQrPfG2/hand-drawn-no-data-concept-52683-127823-removebg-preview.png"
            alt="No data illustration"
          />
        </div>
      ) : (
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold transition-colors duration-300">
              📋 All Tasks
            </h1>
            
            <div className="flex flex-wrap gap-2">
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">
                  Sort by Deadline {sortOption.includes('deadline') && '▼'}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button onClick={() => handleSort("asc")}>
                      Deadline (Ascending)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleSort("desc")}>
                      Deadline (Descending)
                    </button>
                  </li>
                </ul>
              </div>
              
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">
                  Sort by Bids {sortOption.includes('bids') && '▼'}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button onClick={() => handleSort("bids-asc")}>
                      Bids (Low to High)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleSort("bids-desc")}>
                      Bids (High to Low)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Slide direction="up" cascade damping={0.1} triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[94%] mx-auto">
              {taskData.map((task) => (
                <div
                  key={task._id}
                  className="card shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl dark:hover:shadow-gray-800 transition-shadow duration-300"
                >
                  <div className="card-body space-y-3 p-5">
                    <h2 className="card-title text-lg font-semibold flex items-center gap-2 text-primary dark:text-cyan-400 transition-colors duration-300">
                      📌 <span>{task.title}</span>
                    </h2>
                    <p className="text-sm">
                      {task.description.length > 150 ? (
                        <>
                          {task.description.slice(0, 150)}
                          <span className="text-primary">...See more</span>
                        </>
                      ) : (
                        task.description
                      )}
                    </p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="badge badge-outline">
                        Bids: {task.bidsCount || 0}
                      </span>
                      <span className="text-xs text-gray-500">
                        Deadline: {new Date(task.deadline).toLocaleDateString()}
                      </span>
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
          </Slide>
        </div>
      )}
    </div>
  );
};

export default BrowseTasks;