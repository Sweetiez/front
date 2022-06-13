import React from 'react';
import OrderModel from './OrderModel';
import OrderedProductModel from './OrderedProductModel';
import Lottie from 'react-lottie-player';
import paidAnimation from '../../assets/lotties/paid.json';
import readyAnimation from '../../assets/lotties/ready.json';
import deliveryAnimation from '../../assets/lotties/delivery.json';
import { useTranslation } from 'react-i18next';

interface OrderCardProps {
  order: OrderModel;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const { t } = useTranslation();
  function formatDate(date: string) {
    const [year, month, day] = date.split('-');
    [day, month, year].join('/');
    return (
      <span className="font-semibold ml-1">{[day, month, year].join('/')}</span>
    );
  }
  return (
    <>
      <div className="mx-auto p-6 bg-white border my-2 rounded w-full shadow">
        <div className="flex justify-between ">
          <h3>
            {order.createdAt ? (
              <>
                {t('orders.createdAt')} : {formatDate(order.createdAt)}{' '}
              </>
            ) : (
              <></>
            )}
          </h3>
          <h3>
            {order.pickupDate ? (
              <>
                {t('orders.pickupDate')} : {formatDate(order.pickupDate)}{' '}
              </>
            ) : (
              <></>
            )}
          </h3>
        </div>
        <div className="flex items-center justify-end">
          {order.status}
          {order.status === 'DELIVERED' ? (
            <Lottie
              className="h-8 w-8"
              play
              animationData={deliveryAnimation}
              loop={true}
            />
          ) : order.status === 'PAID' ? (
            <Lottie
              className="h-8 w-8"
              loop
              animationData={paidAnimation}
              play
            />
          ) : order.status === 'READY' ? (
            <Lottie
              className="h-8 w-8"
              loop
              animationData={readyAnimation}
              play
            />
          ) : (
            <></>
          )}
        </div>
        <div>
          {order?.products!.map((product: OrderedProductModel, index) => (
            <div key={index}>
              <span >{product.name + ' ×  ' + product.quantity}</span>
              <br />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <span className="text-gold-100 mr-1">{t('orders.totalPrice')}</span>
          {order.totalPrice + '€'}
        </div>
      </div>
    </>
  );
};

export default OrderCard;
