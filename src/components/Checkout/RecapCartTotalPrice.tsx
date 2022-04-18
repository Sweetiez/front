import React from 'react';

const RecapCartTotalPrice: React.FC = () => {
  return (
    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
        Summary
      </h3>
      <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
        <div className="flex justify-between w-full">
          <p className="text-base dark:text-white leading-4 text-gray-800">
            Subtotal
          </p>
          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
            $56.00
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white leading-4 text-gray-800">
            Discount{' '}
            <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
              STUDENT
            </span>
          </p>
          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
            -$28.00 (50%)
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white leading-4 text-gray-800">
            Shipping
          </p>
          <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
            $8.00
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
          Total
        </p>
        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          $36.00
        </p>
      </div>
    </div>
  );
};

export default RecapCartTotalPrice;
