import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FiCalendar,
  FiDollarSign,
  FiMail,
  FiTag,
  FiUser,
} from "react-icons/fi";

const BrowseTaskDetails = () => {
  const singleTaskDetails = useLoaderData();
  const {
    _id,
    category,
    deadline,
    description,
    title,
    userEmail,
    userName,
    budget,
    bidsCount,
  } = singleTaskDetails;

  const [bidsCounts, setBidsCounts] = useState(bidsCount);

  const handleBidsCount = () => {
    const newBidsCounts = parseInt(bidsCounts) + 1;
    setBidsCounts(newBidsCounts);

    fetch(
      `https://assignment-10-server-side-psi-eight.vercel.app/allTasks/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ bidsCount: newBidsCounts }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Bid placed successfully!");
        }
      });
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-base-100 text-base-content transition-colors">
      <div className="max-w-3xl mx-auto text-center mb-6">
        <p className="text-lg font-semibold">
          You have bid on <span className="text-primary">{bidsCounts}</span> opportunities.
        </p>
      </div>

      <div className="card max-w-3xl mx-auto bg-base-200 shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <FiUser className="text-primary" />
            <span className="font-medium">{userName}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-primary" />
            <span>{userEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiTag className="text-primary" />
            <span className="badge badge-outline badge-primary">{category}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar className="text-primary" />
            <span>{deadline}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-primary" />
            <span>{budget ? `$${budget}` : "Not specified"}</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="leading-relaxed">{description}</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm">
            <span className="font-semibold">Total Bids:</span> {bidsCounts}
          </p>
          <button
            onClick={handleBidsCount}
            className="btn btn-primary btn-sm sm:btn-md"
          >
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseTaskDetails;