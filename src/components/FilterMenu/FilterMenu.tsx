import React from 'react';
import { useTranslation } from 'react-i18next';

import Lottie from 'react-lottie-player';
import filter from '../../assets/lotties/filter.json';
import '../../assets/css/_filter-menu.css';
import TextButton from "../Authentication/TextButton";

const FilterMenu = () => {
  const { t } = useTranslation();
  return (
    <>
        <nav className="bg-white shadow w-full p-1">
            <ul className="flex justify-center items-center">
                <li className="active">
                    <button
                        className="background-transparent outline-none hover:text-gold-100 focus:outline-none nav-link nav-link-fade-up font-pompiere text-xl"
                        type="button"
                    >
                        Mignardises
                    </button>
                </li>
                <li className="">
                    <button
                        className="background-transparent outline-none hover:text-gold-100 focus:outline-none nav-link nav-link-fade-up font-pompiere text-xl"
                        type="button"
                    >
                        Plateaux
                    </button>
                </li>
                <div className="border-left-black h-full w-1"/>
                {/*<button*/}
                {/*    className="grid grid-flow-col auto-cols-max background-transparent ml-1 outline-none hover:text-gold-100 focus:outline-none nav-link nav-link-fade-up font-pompiere text-xl"*/}
                {/*    type="button"*/}
                {/*>*/}
                {/*    <Lottie className="h-4 w-auto" loop animationData={filter} play />*/}
                {/*    <span className="ml-2 text-xs content-center">Filters</span>*/}
                {/*</button>*/}
                {/*<div className="border-l border-black pl-2">*/}
                <div className="divider"/>
                    <button
                        className="ease-linear transform transition-all duration-150 hover:scale-105 ml-3.5 grid grid-flow-col auto-cols-max outline-none r-0 items-center text-black font-bold text-xs pl-3 py-1 focus:outline-none mr-2 mb-1"
                        type="button"
                    >
                        <Lottie className="h-4 w-auto" loop animationData={filter} play />
                        <span className="ml-2 text-xs content-center font-pompiere text-xl">More Filters</span>
                    </button>
                {/*</div>*/}
            </ul>
        </nav>
    </>
  );
};

export default FilterMenu;
