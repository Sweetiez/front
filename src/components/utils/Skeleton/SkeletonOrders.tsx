import React from 'react';
import SkeletonOrderCard from './SkeletonOrderCard';

const SkeletonOrders = () => {
  const orders = [];
  for (let i = 0; i < 6; i++) {
    orders.push(<SkeletonOrderCard key={i} />);
  }
  return (
    <>
      <div className="bg-gray-100 flex-auto items-center md:px-40 py-6">
        {orders}
      </div>
    </>
  );
};

export default SkeletonOrders;
