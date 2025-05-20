import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FiCalendar, FiUser, FiTag, FiMail, FiDollarSign } from 'react-icons/fi';

const BrowseTaskDetails = () => {
  const singleTaskDetails = useLoaderData();
  const { category, deadline, description, title, userEmail, userName, budget } = singleTaskDetails;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h1>

        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FiUser className="text-blue-600" />
            <span className="font-medium text-gray-800">{userName}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-blue-600" />
            <span>{userEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiTag className="text-blue-600" />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar className="text-blue-600" />
            <span>{deadline}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-blue-600" />
            <span>{budget ? `$${budget}` : 'Not specified'}</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseTaskDetails;
