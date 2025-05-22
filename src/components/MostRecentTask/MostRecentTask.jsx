import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import doNotFound from "../../assets/doNotFound.json";
import Loader from "../Loader/Loader";
import SingleTask from "./SingleTask";

const MostRecentTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://assignment-10-server-side-p29pbl8s6-mohammad7558s-projects.vercel.app/allTasks"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTasks(data);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-20 my-20">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {tasks.length === 0 ? (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl text-center font-bold mb-5">
                No Recent Task
              </h1>
              <div className="flex flex-col items-center justify-center text-center p-8">
                <Lottie animationData={doNotFound} loop={true} />
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-center font-bold text-4xl mb-10">
                Most Recent Tasks
              </h1>
              <Slide
                direction="up"
                delay={100}
                duration={400}
                fraction={0.1}
                triggerOnce
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {tasks.map((singleTask) => (
                    <SingleTask
                      key={singleTask._id}
                      singleTask={singleTask}
                    ></SingleTask>
                  ))}
                </div>
              </Slide>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MostRecentTask;
