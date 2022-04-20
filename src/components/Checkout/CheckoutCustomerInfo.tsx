import React from 'react';
import { useTranslation } from 'react-i18next';
import { IHandleNav } from './IHandleNav';

const CheckoutCustomerInfo: React.FC<IHandleNav> = ({
  handleNext,
  handlePrevious,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-end-6">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.firstName')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  required={true}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.lastName')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  required={true}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.email')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="grid-mail"
                  type="email"
                  placeholder="email@example.com"
                  required={true}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.phone')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="grid-password"
                  type="tel"
                  placeholder="06.00.00.00.00"
                  required={true}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.pickupDate')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="grid-pickup-date"
                  type="date"
                  required={true}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.address')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-city"
                  type="text"
                  placeholder="3 rue Victor Hugo"
                  required={true}
                />
              </div>
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.city')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-city"
                  type="text"
                  placeholder="Paris"
                  required={true}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  {t('checkout.customerDetail.zip')}
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-zip"
                  type="text"
                  placeholder="75001"
                  required={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <button
          onClick={handlePrevious}
          className="col-start-3 col-end-4 bg-gray-400 transform transition duration-200 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg my-9"
        >
          {t('checkout.previousStep')}
        </button>
        <button
          onClick={handleNext}
          className="col-start-4 col-end-5 bg-gold-100 transform transition duration-200 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg my-9"
        >
          {t('checkout.nextStep')}
        </button>
      </div>
    </>
  );
};

export default CheckoutCustomerInfo;
