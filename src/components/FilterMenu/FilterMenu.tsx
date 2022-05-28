import React, { Fragment, useState } from 'react';

import Lottie from 'react-lottie-player';
import filter from '../../assets/lotties/filter.json';
import '../../assets/css/_filter-menu.css';
import { Dialog, Transition } from '@headlessui/react';
import FiltersModal from './FiltersModal';
import { useTranslation } from 'react-i18next';

const FilterMenu = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState(1);
  const [filtersOpen, setFiltersOpenOpen] = useState(false);

  const navigationOptions = [
    {
      index: 1,
      option: t('filters.filtersMenu.sweets'),
    },
    {
      index: 2,
      option: t('filters.filtersMenu.trays'),
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
            onClick={() => setFiltersOpenOpen(true)}
          >
            <Lottie className="h-4 w-auto" loop animationData={filter} play />
            <span className="ml-2 text-xs content-center font-pompiere text-xl">
              More Filters
            </span>
          </button>
        </ul>
      </nav>
      <Transition.Root show={filtersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="z-50 fixed inset-0 overflow-hidden"
          onClose={setFiltersOpenOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <FiltersModal setOpenedModal={setFiltersOpenOpen} />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default FilterMenu;
