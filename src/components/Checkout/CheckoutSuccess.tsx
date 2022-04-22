import React from 'react';
import Lottie from 'react-lottie-player';
import cookingOrderAnimation from '../../assets/lotties/cooking-order.json';
import sparklesAnimation from '../../assets/lotties/sparkles.json';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CheckoutSuccess: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="row-start-1 col-start-3 col-end-5">
          <div className="relative">
            {/*// @ts-ignore*/}
            <Lottie
              className="absolute z-10 w-auto"
              play={true}
              animationData={sparklesAnimation}
              loop={false}
            />
            <p className="text-4xl pt-8 font-pompiere content-center">
              {t('checkout.success.title')}
            </p>
          </div>
          {/*// @ts-ignore*/}
          <Lottie
            className="h-auto w-auto"
            play={true}
            animationData={cookingOrderAnimation}
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
  );
};

export default CheckoutSuccess;
