import React from 'react';
import CartModel from '../Cart/CartModel';
import { useTranslation } from 'react-i18next';

interface RecapCartProps {
  cart: CartModel[];
}
const RecapCart: React.FC<RecapCartProps> = ({ cart }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <p className="mb-4 text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
        {t('checkout.cart.title')}
      </p>
      {cart.map((item, index) => {
        return <RecapCartRow item={item} key={index} />;
      })}
    </div>
  );
};

export default RecapCart;

interface RecapCartRowProps {
  item: CartModel;
}

const RecapCartRow: React.FC<RecapCartRowProps> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
      <div className="pb-4 md:pb-8 w-full md:w-40">
        <img
          className="w-full h-32 object-cover object-center md:block rounded"
          src={
            // @ts-ignore
            item.item?.images[0]
          }
          alt="product-img"
        />
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
            {item.item?.name}
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">
                {t('checkout.cart.description')}:{' '}
              </span>{' '}
              {item.item?.description}
            </p>
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">
                {t('checkout.cart.unitPrice')}:{' '}
              </span>{' '}
              {item.item?.price} €
            </p>
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base dark:text-white xl:text-lg leading-6"></p>
          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
            x{item.quantity}
          </p>
          <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
            {
              // @ts-ignore
              (item.quantity * item.item.price).toFixed(2)
            }{' '}
            €
          </p>
        </div>
      </div>
    </div>
  );
};
