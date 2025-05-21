import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Service = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 my-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-base-content">
            Find the{" "}
            <span className="text-primary">
              <Typewriter
                words={["talent", "skills", "freelancers", "experts"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            needed to grow your business.
          </h1>
          <p className="text-lg max-w-xl">
            Advertise your jobs to millions of monthly users and search through
            15.8 million CVs to find the perfect match.
          </p>
          <button
            className="inline-flex items-center bg-green-800 hover:bg-green-900 transition-colors duration-300 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl"
            aria-label="Get Started"
          >
            Get Started <span className="ml-3 text-xl">↗</span>
          </button>
        </div>

        {/* Right Stats Section */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Top Full Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 col-span-1 md:col-span-2 text-center transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h2 className="text-5xl font-extrabold text-green-900">4.9/5</h2>
            <p className="text-gray-700 mt-3 text-lg font-medium">
              Clients rate professionals on Freeio
            </p>
          </div>

          {/* Bottom Left Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h2 className="text-4xl font-extrabold text-green-800">98%</h2>
            <p className="text-gray-700 mt-3 text-base font-medium">
              98% of customers are satisfied after working with their
              freelancers
            </p>
          </div>

          {/* Bottom Right Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <h2 className="text-4xl font-extrabold text-green-800">Award</h2>
            <p className="text-gray-700 mt-3 text-base font-medium">
              G2’s 2022 Best Software Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
