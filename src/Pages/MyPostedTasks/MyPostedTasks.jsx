import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyPostedTasks = () => {
    const userData = useLoaderData();
    console.log(userData);
    return (
        <div>
            <h1>this is my posted task</h1>
        </div>
    );
};

export default MyPostedTasks;