import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCardModel from './ProductCardModel';
import { setCart, useCart } from '../../hooks/cart/cartHook';
import Stepper from "../Stepper/Stepper";

interface QuickShopProps {
  product: ProductCardModel;
  setOpenedModal: (openedModal: boolean) => void;
}

const QuickShop: React.FC<QuickShopProps> = ({ product, setOpenedModal }) => {
  const [itemCount, setItemCount] = useState<string | undefined>('1');
  const { t } = useTranslation();

  const unitPrice = product.price ? product.price : 9999999999;
  const { data: cartData } = useCart();
  const cart = cartData ? cartData : [];


  const price = +(itemCount ? itemCount : 1) * unitPrice;

  return (
    <>
      {/*// <!-- CONTAINER MODAL-->*/}
      <div className="flex items-center justify-center">
        {/*// <!--MODAL ITEM-->*/}
        <div className="w-auto mx-4 p-4 rounded-xl ">
          {/*// <!--MODAL HEADER-->*/}
          <div className="flex justify-between items center border-b border-gray-200 py-3">
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-gray-800">
                {t('quickShop.title')}
              </p>
            </div>
            <button
              onClick={() => {
                setOpenedModal(false);
              }}
              className="bg-gold-100  hover: cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            >
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round">
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>

            </button>
          </div>

          {/*// <!--MODAL BODY-->*/}
          <div className="grid grid-cols-2 items-center mr-4">
            <div className="pt-3">
              <img
                className="h-40 rounded-2xl w-full object-cover"
                src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                alt="product-item"
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">{product.name}</p>
              <p className="text-xl font-bold text-gray-800">{unitPrice} €</p>
              {/* Stepper */}
              <Stepper itemCount={itemCount} setItemCount={setItemCount}/>
              <button
                onClick={() => {
                  setCart([
                    ...cart,
                    {
                      item: product,
                      quantity: itemCount ? +itemCount : 1,
                    },
                  ]);
                  setOpenedModal(false);
                }}
                className="bg-gold-100 transform transition duration-200 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg"
              >
                {t('quickShop.addFor', {
                  price,
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickShop;
