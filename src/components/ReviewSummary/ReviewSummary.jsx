import React from "react";

const ReviewSummary = () => {
  return (
    <section className="bg-base-100 text-base-content py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">
          Platform <span className="text-primary">Ratings</span>
        </h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          See what our clients say about their experience on FreelancerHub.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Overall Rating */}
          <div className="w-full md:w-1/3">
            <div className="text-6xl font-bold text-primary mb-1">4.8</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Average Rating</p>
            <div className="rating rating-md mt-2">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  className="mask mask-star-2 bg-primary"
                  checked
                  readOnly
                />
              ))}
            </div>
            <p className="text-sm mt-2">Based on 1,245 reviews</p>
          </div>

          {/* Rating Breakdown */}
          <div className="w-full md:w-2/3 space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3">
                <span className="w-12 text-sm">{star} star</span>
                <progress
                  className="progress progress-primary flex-1"
                  value={star === 5 ? 78 : star === 4 ? 15 : star === 3 ? 5 : 1}
                  max="100"
                ></progress>
                <span className="text-sm w-8 text-right">
                  {star === 5 ? "78%" : star === 4 ? "15%" : star === 3 ? "5%" : "1%"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSummary;
