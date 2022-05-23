import React from 'react';
import SkeletonCard from './SkeletonCard';
import SkeletonCarousel from './SkeletonCarousel';

const SkeletonShop = () => {
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<SkeletonCard key={i} />);
  }
  return (
    <>
      <div className="pb-5">
        <SkeletonCarousel height={'h-40'} />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5">
          <div className="col-start-1 col-end-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-rows-2">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonShop;
