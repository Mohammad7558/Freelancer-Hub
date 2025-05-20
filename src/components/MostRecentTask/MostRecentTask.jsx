import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const MostRecentTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allTasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-center font-bold text-4xl mb-10">Most Recent Tasks</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {tasks.map((singleTask) => (
          <SingleTask key={singleTask._id} singleTask={singleTask}></SingleTask>
        ))}
      </div>
    </div>
  );
};

export default MostRecentTask;
