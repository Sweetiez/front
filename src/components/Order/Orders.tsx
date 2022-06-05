import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Page from '../Page/Page';
import { useUserOrders } from '../../hooks/orders/orders';
import OrderCard from './OrderCard';
import { useTranslation } from 'react-i18next';

const Orders: React.FC = () => {
  const { t } = useTranslation();
  const { data: orderData } = useUserOrders();

  return (
    <Page>
      <NavMenu />
      <div className="bg-gray-100 flex-auto items-center md:px-40 py-6">
        <div className="font-dark font-bold pt-4 align font-birthstone text-5xl">
          {t('orders.title')}
        </div>
        <div className="flex flex-col justify-center">
          {orderData?.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Orders;
