import React from 'react';
import SkeletonCard from './SkeletonCard';

const SkeletonRecipes = () => {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(<SkeletonCard key={i} width="w-80" height="h-40" />);
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-5">
          <div className="col-start-2 col-end-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-2">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonRecipes;
