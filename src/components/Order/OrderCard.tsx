import React from 'react';
import OrderModel from './OrderModel';

interface OrderCardProps {
  order: OrderModel;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="col-start-1 col-end-3 relative my-3 mx-3 lg:mx-5 flex flex-wrap justify-center">
      <div className="relative w-60 xl:w-96 min-w-full bg-white shadow-md rounded-2xl  py-0 my-0 cursor-pointer border transform transition duration-500 hover:scale-110 ">
        <div className="overflow-x-hidden rounded-t-lg relative">
          <div className="bg-indigo-500">
            {order.createdAt} - {order.firstName}{' '}
          </div>
          <div className="flex justify-between">
            <p>Nombre de produits : {order.products?.length}</p>
            <p>{order.totalPrice} €</p>
          </div>
          <p>Pickup date: {order.pickupDate}</p>
          <p>Order status: {order.status}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
