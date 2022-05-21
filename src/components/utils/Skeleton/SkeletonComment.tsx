import React from 'react';

const SkeletonComment = () => {
  return (
    <>
      <div className="bg-white max-w rounded-2xl px-6 py-2 mt-2 shadow-lg transition duration-500 transform transition duration-200 hover:scale-105">
        <div className="mt-4">
          <div className="mb-1">
            <div className="bg-gray-200 animate-pulse h-5 w-28 rounded-lg"></div>
          </div>
          <div className="bg-gray-200 animate-pulse rounded-lg h-16"></div>
          <div className="flex justify-between">
            <div className="mt-2">
              <div className="bg-gray-200 animate-pulse h-5 w-28 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonComment;
