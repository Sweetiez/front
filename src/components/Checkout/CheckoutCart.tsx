import React from 'react';
import { useCart } from '../../hooks/cart/cartHook';
import { useTranslation } from 'react-i18next';
import RecapCart from './RecapCart';
import RecapCartTotalPrice from './RecapCartTotalPrice';
import { IHandleNav } from './IHandleNav';
import Lottie from 'react-lottie-player';
import emptyCart from '../../assets/lotties/empty-cart.json';
import { Link } from 'react-router-dom';
import RewardSelector from './rewards/RewardSelector';
import { useTokenAvailable } from '../../hooks/auth/tokenHook';

const CheckoutCart: React.FC<IHandleNav> = ({ handleNext }) => {
  const { t } = useTranslation();
  const { data: cartData } = useCart();
  const { data: isTokenAvailable } = useTokenAvailable();
  const cart = cartData ? cartData : [];
  const totalPrice = cart.reduce(
    (acc, cartItem) =>
      acc +
      (cartItem && cartItem.item && cartItem.item.price ?
          cartItem.item.unitPerPackage ? cartItem.item.price * cartItem.item.unitPerPackage : cartItem.item.price : 0 ) *
        (cartItem?.quantity ? cartItem.quantity : 0),
    0,
  );

  return (
    <>
      {cart.length > 0 ? (
        <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex flex-col xl:flex-row jusitfy-center items-stretch w-full ">
            <div className="flex flex-col justify-start items-start w-full ">
              <RecapCart cart={cart} />
              <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full ">
                <RecapCartTotalPrice totalPrice={totalPrice} />
                {isTokenAvailable ? <RewardSelector /> : <></>}
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
      ) : (
        <>
          <div className="grid grid-cols-6">
            <div className="row-start-1 col-start-3 col-end-5">
              <div className="relative">
                <p className="text-4xl py-4 font-pompiere content-center">
                  {t('checkout.cart.empty')}
                </p>
              </div>
              {/*// @ts-ignore*/}
              <Lottie
                className="h-auto w-auto"
                play={true}
                animationData={emptyCart}
                loop={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-6">
            <button className="z-20 col-start-3 col-end-5 bg-gold-100 transform transition duration-200 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg my-9">
              <Link to="/">{t('checkout.backToShop')}</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CheckoutCart;
