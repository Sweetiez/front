import React from 'react';
import Page from '../Page/Page';
import RecapCart from './RecapCart';
import CheckoutSteps from './CheckoutSteps';
import RecapCartTotalPrice from './RecapCartTotalPrice';
import { useCart } from '../../hooks/cart/cartHook';

const Checkout: React.FC = () => {
  const { data: cartData } = useCart();
  const cart = cartData ? cartData : [];

  return (
    <Page>
      <CheckoutSteps stepName="cart" />
      <>
        <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex flex-col xl:flex-row jusitfy-center items-stretch w-full ">
            <div className="flex flex-col justify-start items-start w-full ">
              <RecapCart cart={cart} />
              <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full ">
                <RecapCartTotalPrice />
                <>
                  <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                    <div className="w-full flex justify-center items-center">
                      <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                        Next step
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </>
    </Page>
  );
};

export default Checkout;
