import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {handleRender} from './TooltipsSlider';
import {FilterType} from '../Shop/Shop';
import FilterCheckboxItem from './FilterCheckboxItem';

interface FiltersModalProps {
  setOpenedModal: (openedModal: boolean) => void;
  setFilters: (filter: FilterType) => void;
  filters: FilterType;
}

const FiltersModal: React.FC<FiltersModalProps> = ({
  setOpenedModal,
  setFilters,
  filters,
}) => {
  const { t } = useTranslation();
  const [reset, setReset] = useState<boolean>(false);

  const handleSliderRatingChange = (nextValues: number | number[]) => {
    const newFilters = { ...filters };
    newFilters.ratings = Array.isArray(nextValues)
      ? [...nextValues]
      : [nextValues, nextValues];
    setFilters(newFilters);
  };
  const handleSliderPriceChange = (nextValues: number | number[]) => {
    const newFilters = { ...filters };
    newFilters.price = Array.isArray(nextValues)
      ? [...nextValues]
      : [nextValues, nextValues];
    setFilters(newFilters);
  };

  const handleCheckboxChange = (value: boolean, name: string) => {
    const newFilters = { ...filters };
    const exists = filters.category?.includes(name);
    if (exists && !value && newFilters.category) {
      newFilters.category = newFilters.category.filter(
        (filter) => filter !== name,
      );
    } else if (value && newFilters.category) {
      newFilters.category = [...newFilters.category, name];
    } else {
      newFilters.category = [name];
    }
    setFilters(newFilters);
  };

  function resetFilters() {
    const newFilters = { ...filters };
    delete newFilters.ratings;
    delete newFilters.price;
    delete newFilters.category;
    setReset(!reset);
    setFilters(newFilters);
  }

  return (
    <>
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          {t('filters.filtersModal.title')}{' '}

          <div className="absolute mr-3 right-0">
            <button
              onClick={() => {
                setOpenedModal(false);
              }}
              className="bg-gold-100 focus:outline-none transform transition duration-200 hover:scale-110 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-10">
          <div className="mt-8 mb-10">
            <div className="mb-4">
              <span className="font-semibold font-pompiere text-2xl">
                {t('filters.filtersModal.rating')}
              </span>
            </div>
            <div className="px-2">
              <Slider
                range
                dots
                step={1}
                allowCross={false}
                min={0}
                max={5}
                value={filters.ratings ? filters.ratings : [0, 5]}
                // defaultValue={filters.ratings ? filters.ratings : [0, 5]}
                marks={{ 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }}
                trackStyle={[
                  { backgroundColor: '#dba970' },
                  { backgroundColor: '#dba970' },
                ]}
                handleStyle={{
                  borderColor: '#dba970',
                  backgroundColor: '#dba970',
                  opacity: 1,
                }}
                railStyle={{ backgroundColor: '#a1a1aa' }}
                dotStyle={{ borderColor: '#dba970' }}
                activeDotStyle={{ borderColor: '#dba970' }}
                onChange={handleSliderRatingChange}
              />
            </div>
          </div>
          <div className="mt-8 mb-10">
            <div className="mb-4">
              <span className="font-semibold font-pompiere text-2xl">
                {t('filters.filtersModal.price')}
              </span>
            </div>
            <div className="px-2">
              <Slider
                range
                allowCross={false}
                min={0}
                max={200}
                value={filters.price ? filters.price : [0, 200]}
                // defaultValue={filters.price ? filters.price : [0, 200]}
                marks={{
                  0: 0 + '€',
                  50: 50 + '€',
                  100: 100 + '€',
                  150: 150 + '€',
                  200: 200 + '€',
                }}
                onChange={handleSliderPriceChange}
                handleRender={handleRender}
                trackStyle={[
                  { backgroundColor: '#dba970' },
                  { backgroundColor: '#dba970' },
                ]}
                handleStyle={{
                  borderColor: '#dba970',
                  backgroundColor: '#dba970',
                  opacity: 1,
                }}
                railStyle={{ backgroundColor: '#a1a1aa' }}
                dotStyle={{ borderColor: '#dba970' }}
                activeDotStyle={{ borderColor: '#dba970' }}
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-4">
              <span className="font-semibold font-pompiere text-2xl">
                {t('filters.filtersModal.categories')}
              </span>
            </div>
            <FilterCheckboxItem
              name={'SWEET'}
              onChange={handleCheckboxChange}
              initialCheck={filters.category?.includes('SWEET') || false}
              reset={reset}
            />
            <FilterCheckboxItem
              name={'SALTY'}
              onChange={handleCheckboxChange}
              initialCheck={filters.category?.includes('SALTY') || false}
              reset={reset}
            />
            <FilterCheckboxItem
              name={'MIXED'}
              onChange={handleCheckboxChange}
              initialCheck={filters.category?.includes('MIXED') || false}
              reset={reset}
            />
          </div>
          {/*<div className="mb-8">*/}
          {/*  <div className="mb-4">*/}
          {/*    <span className="font-semibold font-pompiere text-2xl">*/}
          {/*      {t('filters.filtersModal.allergens')}*/}
          {/*    </span>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="my-2">
          <button
            className="flex items-center justify-center rounded-md border border-transparent bg-gold-100 w-full py-3 text-base font-medium text-white shadow-sm transform transition duration-200 hover:scale-105"
            type="button"
            onClick={resetFilters}
          >
            {t('filters.filtersModal.resetFilters')}
          </button>
        </div>
      </div>
    </>
  );
};

export default FiltersModal;
