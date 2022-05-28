import { Dialog } from '@headlessui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { handleRender } from './TooltipsSlider';

interface FiltersModalProps {
  setOpenedModal: (openedModal: boolean) => void;
}

const FiltersModal: React.FC<FiltersModalProps> = ({ setOpenedModal }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <Dialog.Title className="text-3xl font-pompiere text-gray-900">
            {t('filters.filtersModal.title')}{' '}
          </Dialog.Title>

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
              <span className="font-semibold font-pompiere text-2xl">Note</span>
            </div>
            <div className="px-2">
              <Slider
                range
                dots
                step={1}
                allowCross={false}
                min={0}
                max={5}
                defaultValue={[0, 5]}
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
              />
            </div>
          </div>
          <div className="mt-8 mb-10">
            <div className="mb-4">
              <span className="font-semibold font-pompiere text-2xl">Prix</span>
            </div>
            <div className="px-2">
              <Slider
                range
                allowCross={false}
                min={0}
                max={200}
                defaultValue={[0, 200]}
                marks={{
                  0: 0 + '€',
                  50: 50 + '€',
                  100: 100 + '€',
                  150: 150 + '€',
                  200: 200 + '€',
                }}
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
                Catégorie
              </span>
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="appearance-none border-gray-400 text-gold-100 focus:ring-gold-100 rounded"
                required={true}
              />
              <span className="ml-2 text-sm">Sucrée</span>
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="appearance-none border-gray-400 text-gold-100 focus:ring-gold-100 rounded"
                required={true}
              />
              <span className="ml-2 text-sm">Salée</span>
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                className="appearance-none border-gray-400 text-gold-100 focus:ring-gold-100 rounded"
                required={true}
              />
              <span className="ml-2 text-sm">Mixte</span>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-4">
              <span className="font-semibold font-pompiere text-2xl">
                Allergènes
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersModal;
