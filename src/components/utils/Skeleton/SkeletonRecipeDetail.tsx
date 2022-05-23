import React from 'react';

const SkeletonRecipeDetail = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-end-5">
          <div className="place-content-center h-auto mt-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 pt-4">
            <div className="col-start-1 col-end-3">
              <div className="md:h-80 h-40 w-full animate-pulse bg-gray-200 rounded-lg" />
            </div>
            <div className="mx-3 col-start-3 col-end-4">
              <div className="w-full h-20 animate-pulse bg-gray-200 rounded-lg mb-1 mt-8" />
              <div className="w-40 h-4 animate-pulse bg-gray-200 rounded-lg mb-1" />
              <div className="w-20 h-4 animate-pulse bg-gray-200 rounded-lg mb-1" />
              <div className="w-28 h-4 animate-pulse bg-gray-200 rounded-lg mb-1" />
            </div>
            <div className="col-start-1 col-end-4 my-5">
              <span className="font-birthstone text-4xl">
                <div className="w-full h-10 animate-pulse bg-gray-200 rounded-lg mb-1" />
                <div className="w-full h-10 animate-pulse bg-gray-200 rounded-lg mb-1" />
                <div className="w-full h-10 animate-pulse bg-gray-200 rounded-lg mb-1" />
                <div className="w-full h-10 animate-pulse bg-gray-200 rounded-lg mb-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonRecipeDetail;
