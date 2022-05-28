import React, { useState } from 'react';

import Lottie from 'react-lottie-player';
import filter from '../../assets/lotties/filter.json';
import '../../assets/css/_filter-menu.css';

const FilterMenu = () => {
  const [activeFilter, setActiveFilter] = useState(1);

  const navigationOptions = [
    {
      index: 1,
      option: 'Mignardises',
    },
    {
      index: 2,
      option: 'Plateaux',
    },
  ];

  function setActiveFilterMenu(index: number) {
    setActiveFilter(index);
  }

  return (
    <>
      <nav className="bg-white shadow w-full p-1">
        <ul className="flex justify-center items-center">
          {navigationOptions &&
            navigationOptions.map(({ index, option }) => {
              return (
                <li key={option}>
                  <button
                    className={`${
                      activeFilter === index
                        ? 'active'
                        : 'nav-link nav-link-ltr'
                    } background-transparent font-semibold outline-none hover:text-gold-100 focus:outline-none font-pompiere text-xl`}
                    type="button"
                    onClick={() => setActiveFilterMenu(index)}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          <div className="divider" />
          <button
            className="ease-linear transform transition-all font-semibold duration-300 hover:scale-105 ml-3.5 grid grid-flow-col auto-cols-max outline-none r-0 items-center text-black text-xs pl-3 py-1 focus:outline-none mr-2 mb-1"
            type="button"
          >
            <Lottie className="h-4 w-auto" loop animationData={filter} play />
            <span className="ml-2 text-xs content-center font-pompiere text-xl">
              More Filters
            </span>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default FilterMenu;
