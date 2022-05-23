import React from 'react';
import SkeletonCarousel from './SkeletonCarousel';
import SkeletonComment from './SkeletonComment';
import SkeletonText from './SkeletonText';

const SkeletonProductDetail = () => {
  return (
    <>
      <SkeletonCarousel />
      <div className="m-4 mt-16">
        <SkeletonText />
      </div>
      <SkeletonComment />
      <SkeletonComment />
      <SkeletonComment />
    </>
  );
};

export default SkeletonProductDetail;
