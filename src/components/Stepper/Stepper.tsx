import React from 'react';

interface StepperProps {
  itemCount?: string;
  setItemCount: (itemCount?: string) => void;
}

const Stepper: React.FC<StepperProps> = ({ itemCount, setItemCount }) => {
  function verifyInput() {
    return !itemCount || isNaN(+itemCount) || +itemCount <= 0 ? '1' : itemCount;
  }

  function handlePlus() {
    setItemCount((+verifyInput() + 1).toString());
  }

  function handleMinus() {
    setItemCount(
      itemCount && +itemCount <= 1 ? '1' : (+verifyInput() - 1).toString(),
    );
  }

  return (
    <>
      <div className="flex flex-row h-8 w-24 rounded-lg relative mr-2">
        <button
          onClick={handleMinus}
          className="items-center bg-withe transform transition duration-200 hover:scale-110 text-white h-full w-20 flex rounded-lg focus:outline-none cursor-pointer"
        >
          <svg
            className="h-4 w-4 w-full text-gold-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <input
          className="md:p-2 p-1 text-xs md:text-base focus:outline-none text-center"
          type="hidden"
          onChange={(e) =>
            setItemCount(
              e.target.value
                .trim()
                .match(/[\d,.]+/g)?.[0]
                .replace(',', '.'),
            )
          }
          onBlur={() => setItemCount(verifyInput())}
        />

        <div className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
          {itemCount ?? ''}
        </div>

        <button
          onClick={handlePlus}
          className="items-center transform transition duration-200 hover:scale-110 text-gold-100 h-full p-1 w-20 flex rounded-lg focus:outline-none cursor-pointer"
        >
          <svg
            className="h-5 w-5 w-full text-gold-100 "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Stepper;
