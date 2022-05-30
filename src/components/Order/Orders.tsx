import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Page from '../Page/Page';
import { useUserOrders } from '../../hooks/orders/orders';
import OrderCard from './OrderCard';

const Orders: React.FC = () => {
  const { data: orderData } = useUserOrders();
  console.log(orderData);

  return (
    <Page>
      <NavMenu />
      {/*<div className="text-5xl font-dark font-bold font-birthstone fex justify-center">*/}
      {/*  Your orders :*/}
      {/*</div>*/}
      <div className="flex justify-center">
        {/*<div className="grid grid-cols-5">*/}
        {/*  <div className="col-start-1 col-end-6">*/}
        {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-3 grid-rows-2">*/}
        {/**/}
        {/*{orderData?.map((order, index) => (*/}
        {/*  <OrderCard key={index} order={order} />*/}
        {/*))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className="bg-gray-100 flex-auto items-center">
        {/*<div className="flex flex-col md:flex-row items-center justify-center items-center px-5 text-gray-700">*/}
        <div className="gris grid-cols-6">
          <div className="col-start-2 text-5xl font-dark font-bold pt-4 align font-birthstone">
            Your orders :
          </div>
          {/*<div className="bg-red-500 w-1/6 h-50">*/}
          <div className="flex-1 flex-col justify-center w-4/5">
            {/*<div className="grid grid-cols-5">*/}
            {/*  <div className="col-start-1 col-end-6">*/}
            {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-3 grid-rows-2">*/}
            {/**/}
            {orderData?.map((order, index) => (
              <OrderCard key={index} order={order} />
            ))}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          {/*</div>*/}
        </div>
        {/*</div>*/}
      </div>
    </Page>
  );
};

export default Orders;
