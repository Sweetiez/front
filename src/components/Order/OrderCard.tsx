import React, { useState } from 'react';
import OrderModel from './OrderModel';
import OrderedProductModel from './OrderedProductModel';
import Lottie from 'react-lottie-player';
import paidAnimation from '../../assets/lotties/paid.json';
import readyAnimation from '../../assets/lotties/ready.json';
import deliveryAnimation from '../../assets/lotties/delivery.json';

interface OrderCardProps {
  order: OrderModel;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const [isLottieHover, setIsLottieHover] = useState(false);

  function formatDate(date: string) {
    const [year, month, day] = date.split('-');
    return [day, month, year].join('/');
  }
  return (
    <>
      <div
        className="mx-auto p-6 bg-white border my-2 rounded"
        onMouseEnter={() => setIsLottieHover(true)}
        onMouseLeave={() => setIsLottieHover(false)}
      >
        <div className="flex justify-between ">
          <h3 className="font-semibold">
            {order.createdAt ? (
              'Commande passé le : ' + formatDate(order.createdAt)
            ) : (
              <></>
            )}
          </h3>
          <div>
            {order.status}
            {order.status === 'CREATED' ? (
              <Lottie
                className="h-8 w-8"
                play={isLottieHover}
                animationData={deliveryAnimation}
                loop={true}
              />
            ) : order.status === 'PAID' ? (
              <Lottie
                className="h-8 w-8"
                loop
                animationData={paidAnimation}
                play={isLottieHover}
              />
            ) : order.status === 'READY' ? (
              <Lottie
                className="h-8 w-8"
                // className="h-auto w-auto"
                loop
                animationData={readyAnimation}
                play={isLottieHover}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>
          <p>
            {order?.products!.map((product: OrderedProductModel) => (
              <>
                <span>{product.name + ' ×  ' + product.quantity}</span>
                <br />
              </>
            ))}
          </p>
        </div>
        <div className="flex justify-end">{order.totalPrice + '€'}</div>
        <div className="flex justify-end">
          {order.pickupDate ? (
            'Commande prévu pour le : ' +
            (
              <span className="font-semibold">
                {formatDate(order.pickupDate)}
              </span>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default OrderCard;
