import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-base-200 text-base-content py-20 mb-20 transition-colors duration-300">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How <span className="text-primary">FreelancerHub</span> Works
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          It's super easy to get started. Just follow these 4 simple steps!
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="p-4">
            <div className="text-4xl mb-2 text-primary">📝</div>
            <h4 className="font-semibold mb-1">Post a Job</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tell us what you need done and your budget.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4">
            <div className="text-4xl mb-2 text-primary">📨</div>
            <h4 className="font-semibold mb-1">Receive Proposals</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Freelancers will bid and share their ideas.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4">
            <div className="text-4xl mb-2 text-primary">💬</div>
            <h4 className="font-semibold mb-1">Chat & Hire</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Talk directly and choose the best fit.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-4">
            <div className="text-4xl mb-2 text-primary">💼</div>
            <h4 className="font-semibold mb-1">Work & Pay</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get the job done and pay securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
