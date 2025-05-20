import React from 'react';

const Loader = () => {
    return (
        <div className='w-full h-[70vh] text-center flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default Loader;