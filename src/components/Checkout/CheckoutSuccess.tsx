import React, { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import cookingOrderAnimation from '../../assets/lotties/cooking-order.json';
import sparklesAnimation from '../../assets/lotties/sparkles.json';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import CheckoutSteps from './CheckoutSteps';
import Page from '../Page/Page';
import { removeTempEmail } from '../../hooks/orders/orders';

const CheckoutSuccess: React.FC = () => {
  let { orderId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const isSuccess = query.get('redirect_status');

    if (isSuccess === 'succeeded') {
      // Confirm the payment of the order
      removeTempEmail();
      localStorage.removeItem('cart');
    }
  }, [orderId]);

  return (
    <>
      <Page>
        <CheckoutSteps stepName={'finished'} />
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
      </Page>
    </>
  );
};

export default CheckoutSuccess;
