import React from 'react';

interface StarsProps {
  number: number;
  manageRating?: (rating: number) => void;
}

const Stars: React.FC<StarsProps> = ({ number, manageRating }) => {
  const fullStarNumber = Math.ceil(number) >= 5 ? 5 : Math.ceil(number);
  const emptyStarNumber = 5 - fullStarNumber < 0 ? 0 : 5 - fullStarNumber;

  const fullStar = (index: number) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 text-yellow-500"
      onClick={() => (manageRating ? manageRating(index + 1) : null)}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
  const emptyStar = (index: number) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-5 w-5 text-yellow-500"
      onClick={() =>
        manageRating ? manageRating(index + fullStarNumber + 1) : null
      }
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );

  return (
    <div className="flex flex-row items-center">
      <div className="flex">
        {[...Array(fullStarNumber)].map((_, index) => fullStar(index))}
        {[...Array(emptyStarNumber)].map((_, index) => emptyStar(index))}
      </div>
    </div>
  );
};

export default Stars;
