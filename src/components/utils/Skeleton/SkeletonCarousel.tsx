import React from 'react';

interface SkeletonCarouselProps {
  width?: String;
  height?: String;
}

const SkeletonCarousel: React.FC<SkeletonCarouselProps> = ({
  height,
  width,
}) => {
  return (
    <>
      <div
        className={`${width ? width : 'w-full'} ${
          height ? height : 'h-56'
        } animate-pulse bg-gray-200`}
      />
    </>
  );
};

export default SkeletonCarousel;
