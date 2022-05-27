import React from 'react';
import { useTranslation } from 'react-i18next';
import { IHandleNav } from './IHandleNav';
import { getCart } from '../../hooks/cart/cartHook';
import CreateOrderRequest from '../../hooks/orders/requests/CreateOrderRequest';
import {createAnOrder} from "../../hooks/orders/orders";

const CheckoutCustomerInfo: React.FC<IHandleNav> = ({ handlePrevious }) => {
  const { t } = useTranslation();

  async function handleOrderSubmit(event: any) {
    event.preventDefault();
    const cart = getCart();

    const request = new CreateOrderRequest(
      event.target.firstName.value,
      event.target.lastName.value,
      event.target.email.value,
      event.target.phone.value,
      event.target.pickupDate.value,
      cart,
    );

    const response = await createAnOrder(request);
    console.log(response);
  }

  return (
    <>
      <form onSubmit={handleOrderSubmit}>
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
                    id="firstName"
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
                    id="lastName"
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
                    id="email"
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
                    id="phone"
                    type="tel"
                    placeholder="06 00 00 00 00"
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
                    id="pickupDate"
                    type="date"
                    required={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <button
            type="button"
            onClick={handlePrevious}
            className="col-start-3 col-end-4 bg-gray-400 transform transition duration-200 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg my-9"
          >
            {t('checkout.previousStep')}
          </button>
          <button
            type="submit"
            className="col-start-4 col-end-5 bg-gold-100 transform transition duration-200 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg my-9"
          >
            {t('checkout.nextStep')}
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutCustomerInfo;
