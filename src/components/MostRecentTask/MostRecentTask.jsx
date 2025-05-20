import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import Loader from "../Loader/Loader";

const MostRecentTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allTasks")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTasks(data);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-20">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {tasks.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl text-center font-bold mb-5">No Recent Task</h1>
              <img className="w-[500px]" src="https://i.ibb.co/6Rvw7LQG/hand-drawn-no-data-concept-52683-127823.jpg" alt="" />
            </div>
          ) : (
            <>
              <h1 className="text-center font-bold text-4xl mb-10">
                Most Recent Tasks
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {tasks.map((singleTask) => (
                  <SingleTask
                    key={singleTask._id}
                    singleTask={singleTask}
                  ></SingleTask>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MostRecentTask;
