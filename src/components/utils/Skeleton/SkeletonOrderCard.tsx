import React from 'react';

const SkeletonOrderCard = () => {
    return (
        <>
            <div className="mx-auto p-6 bg-white border my-2 rounded w-full shadow">
                <div className="flex justify-between ">
                    <h3>
                        <div className="bg-gray-200 animate-pulse h-5 w-60 rounded-lg mb-1"></div>
                    </h3>
                    <div className="flex justify-end">
                        <div className="bg-gray-200 animate-pulse h-5 w-60 rounded-lg mb-1"></div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="bg-gray-200 animate-pulse h-5 w-16 rounded-lg mb-1 mr-1"></div>
                    <div className="bg-gray-200 animate-pulse h-8 w-8 rounded-full mb-1"></div>
                </div>
                <div>
                    <div className="bg-gray-200 animate-pulse h-5 w-60 rounded-lg mb-1"></div>
                    <div className="bg-gray-200 animate-pulse h-5 w-60 rounded-lg mb-1"></div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-gray-200 animate-pulse h-5 w-52 rounded-lg"></div>
                </div>
            </div>
        </>
    );
};

export default SkeletonOrderCard;
