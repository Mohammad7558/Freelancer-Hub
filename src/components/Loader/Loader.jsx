import React from 'react';

const Loader = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center text-gray-700 dark:text-gray-300">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loader;
