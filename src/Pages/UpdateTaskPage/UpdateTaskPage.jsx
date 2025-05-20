import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthContext";
import { useLoaderData } from "react-router-dom";

const UpdateTaskPage = () => {
  const userData = useLoaderData(); // Pre-loaded task data
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());
    updatedTask.uid = user.uid;

    const toastId = toast.loading("Updating Task...");
    setLoading(true);

    fetch(`http://localhost:5000/allTasks/${userData?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Task Updated Successfully", { id: toastId });
        } else {
          toast.error("No changes made", { id: toastId });
        }
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to update task", { id: toastId });
        setLoading(false);
      });
  };

  return (
    <div className="my-10 px-4">
      <form
        onSubmit={handleUpdateTask}
        className="max-w-2xl mx-auto p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-green-800">
          Update Task
        </h2>

        <div className="form-control">
          <label className="block text-sm font-medium mb-1">Task Title</label>
          <input
            name="title"
            type="text"
            defaultValue={userData?.title}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            defaultValue={userData?.category}
            required
          >
            <option value="" disabled>Select a category</option>
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
            defaultValue={userData?.bidsCount || 0}
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        <div className="form-control">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows="4"
            defaultValue={userData?.description}
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              name="deadline"
              type="date"
              defaultValue={userData?.deadline}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="block text-sm font-medium mb-1">Budget ($)</label>
            <input
              name="budget"
              type="number"
              defaultValue={userData?.budget}
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
              className="input input-bordered bg-base-200 w-full"
              disabled
            />
            <input
              type="hidden"
              name="userEmail"
              value={user?.email || ""}
            />
          </div>
        </div>

        <div>
          <button
            disabled={loading}
            type="submit"
            className="btn bg-green-800 text-white w-full text-base font-semibold hover:brightness-110 transition duration-200"
          >
            {loading ? "Updating..." : "Update Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTaskPage;
