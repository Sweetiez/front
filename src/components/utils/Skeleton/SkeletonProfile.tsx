import React from 'react';

const SkeletonProfile = () => {
  return (
    <>
      <div className="bg-gray-100 flex-auto items-center md:px-40 py-10">
        <div className="bg-white rounded-lg p-6 flex-col">
          <div className="flex justify-center">
            <div className="bg-gray-200 animate-pulse h-12 w-60 rounded-lg mb-2"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 animate-pulse h-5 w-32 rounded-lg mb-1"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 animate-pulse h-5 w-28 rounded-lg mb-1"></div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex text-grayBlue-200 hover:text-gold-100 cursor-pointer p-2">
              <div className="bg-gray-200 animate-pulse h-5 w-28 rounded-lg"></div>
            </div>
            <div className="flex text-grayBlue-200 hover:text-gold-100 cursor-pointer p-2">
              <div className="bg-gray-200 animate-pulse h-5 w-28 rounded-lg"></div>
            </div>
          </div>
          <div className="py-10 border-t border-blueGray-200 text-center">
            <div className="flex justify-center">
              <div className="bg-gray-200 animate-pulse h-14 w-14 rounded-full mb-2"></div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-200 animate-pulse h-5 w-28 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonProfile;
