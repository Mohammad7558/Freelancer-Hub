import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthContext";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addTask = Object.fromEntries(formData.entries());
    addTask.uid = user.uid;
    const toastId = toast.loading("Adding Task");
    setLoading(true);

    fetch(
      "https://assignment-10-server-side-p29pbl8s6-mohammad7558s-projects.vercel.app/allTasks",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addTask),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Task Added Successfully", { id: toastId });
          setLoading(false);
          form.reset();
        }
      });
  };

  return (
    <div className="my-10 px-4">
      <form
        onSubmit={handleAddTask}
        className="max-w-2xl mx-auto p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-green-800">
          Create a New Task
        </h2>

        <div className="form-control">
          <label className="block text-sm font-medium mb-1">Task Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter task title"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Writing</option>
            <option>Marketing</option>
          </select>
        </div>

        <div className="form-control">
          <label className="block text-sm font-medium mb-1">Bids Count</label>
          <input
            name="bidsCount"
            type="number"
            value={0}
            placeholder="Enter Bids Count"
            className="input input-bordered w-full"
            required
            readOnly
          />
        </div>

        <div className="form-control">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Describe what needs to be done"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              name="deadline"
              type="date"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="block text-sm font-medium mb-1">Budget ($)</label>
            <input
              name="budget"
              type="number"
              placeholder="Enter budget"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered bg-base-200 w-full"
              disabled
            />
            <input
              type="hidden"
              name="userName"
              value={user?.displayName || ""}
            />
          </div>

          <div className="form-control">
            <label className="block text-sm font-medium mb-1">User Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered bg-base-200 w-full"
              disabled
            />
            <input type="hidden" name="userEmail" value={user?.email || ""} />
          </div>
        </div>

        <div>
          <button
            disabled={loading}
            type="submit"
            className="btn bg-green-800 text-white w-full text-base font-semibold hover:brightness-110 transition duration-200"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
