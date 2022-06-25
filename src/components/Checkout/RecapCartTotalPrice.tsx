import React from 'react';
import { useTranslation } from 'react-i18next';

interface RecapCartTotalPriceProps {
  totalPrice: number;
}
const RecapCartTotalPrice: React.FC<RecapCartTotalPriceProps> = ({
  totalPrice,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
        {t('checkout.cart.summary')}
      </h3>
      <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b" />
      <div className="flex justify-between items-center w-full">
        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
          Total
        </p>
        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          {totalPrice.toFixed(2)} €
        </p>
      </div>
    </div>
  );
};

export default RecapCartTotalPrice;
