import React from 'react';

interface SkeletonCarouselProps {
  height?: String;
}

const SkeletonCarousel: React.FC<SkeletonCarouselProps> = ({ height }) => {
  return (
    <>
      <div
        className={`w-full ${
          height ? height : 'h-56'
        } animate-pulse bg-gray-200`}
      />
    </>
  );
};

export default SkeletonCarousel;
