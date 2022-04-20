import React from 'react';
import { useCart } from '../../hooks/cart/cartHook';
import { useTranslation } from 'react-i18next';
import RecapCart from './RecapCart';
import RecapCartTotalPrice from './RecapCartTotalPrice';
import { IHandleNav } from './IHandleNav';

const CheckoutCart: React.FC<IHandleNav> = ({ handleNext }) => {
  const { data: cartData } = useCart();
  const cart = cartData ? cartData : [];
  const { t } = useTranslation();
  const totalPrice = cart.reduce(
    (acc, cartItem) =>
      acc +
      (cartItem.item?.price ? cartItem.item.price : 0) *
        (cartItem?.quantity ? cartItem.quantity : 0),
    0,
  );

  return (
    <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col xl:flex-row jusitfy-center items-stretch w-full ">
        <div className="flex flex-col justify-start items-start w-full ">
          <RecapCart cart={cart} />
          <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full ">
            <RecapCartTotalPrice totalPrice={totalPrice} />
            <>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                <div className="w-full flex justify-center items-center">
                  <button
                    className="bg-gold-100 transform transition duration-200 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg"
                    onClick={handleNext}
                  >
                    {t('checkout.nextStep')}
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
