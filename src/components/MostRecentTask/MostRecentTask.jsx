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
      <h1 className="text-center font-bold text-4xl mb-10">
        Most Recent Tasks
      </h1>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {tasks.length === 0 ? (
            <>
              <h1 className="text-3xl text-center font-bold">No Recent Task</h1>
            </>
          ) : (
            <>
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
