import React from 'react';

const SkeletonCard = () => {
  return (
    <>
      <div className="relative my-3 mx-3 lg:mx-5 flex flex-wrap justify-center">
        <div className="relative w-60 xl:w-64 min-w-full bg-white shadow-md rounded-2xl py-0 my-0 cursor-pointer border transform transition duration-500 hover:scale-110 ">
          <div className="overflow-x-hidden rounded-t-lg relative">
            <div className="w-full h-40 animate-pulse bg-gray-200" />
          </div>
          <div className="p-3">
            <div className="w-36 h-4 mb-1 animate-pulse bg-gray-200 rounded-lg" />
            <div className="w-full h-16 animate-pulse bg-gray-200 rounded-lg" />
            <div className="flex justify-between mt-1">
              <div className="w-14 h-4 animate-pulse bg-gray-200 rounded-lg" />
              <div className="w-20 h-4 animate-pulse bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
