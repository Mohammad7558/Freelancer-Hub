import React from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <section className="bg-base-200 text-base-content py-20">
      <div className="mx-auto w-11/12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-16">
          Discover how businesses are using FreelancerHub to meet their goals and scale faster.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-base-100 rounded-lg shadow-md p-6 border border-base-300 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://randomuser.me/api/portraits/${
                    i === 0 ? "women/45" : i === 1 ? "men/34" : "men/22"
                  }.jpg`}
                  className="w-14 h-14 rounded-full border-2 border-primary"
                  alt="Client"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">
                    {i === 0 ? "Sarah Johnson" : i === 1 ? "David Lee" : "Mark Thompson"}
                  </h4>
                  <p className="text-sm text-base-content/50">
                    {i === 0
                      ? "Marketing Director"
                      : i === 1
                      ? "Startup Founder"
                      : "App Designer"}
                  </p>
                </div>
              </div>
              <p className="italic text-base-content/80 mb-4">
                {i === 0
                  ? `"Found our perfect developer in 48 hours. Saved us weeks!"`
                  : i === 1
                  ? `"Best freelance experience ever. Highly recommended!"`
                  : `"Turned our vision into reality with stunning results."`}
              </p>
              <div className="rating rating-sm">
                {[...Array(5)].map((_, j) => (
                  <input
                    key={j}
                    type="radio"
                    className="mask mask-star-2 bg-primary"
                    checked
                    readOnly
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-2">Start your journey today</h3>
          <p className="text-base-content/70 mb-4">
            Join thousands of businesses who trust FreelancerHub
          </p>
          <Link to="/addTask" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
