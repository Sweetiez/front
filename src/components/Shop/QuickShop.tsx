import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCardModel from './ProductCardModel';
import { setCart, useCart } from '../../hooks/cart/cartHook';
import Stepper from '../Stepper/Stepper';
import LabelButton from '../Button/LabelButton';
import ShowMoreText from 'react-show-more-text';

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

  const price = ((itemCount ? +itemCount : 1) * unitPrice).toFixed(2);

  const manageAdd = () => {
    const item = cart.find((it) => it.item?.id === product?.id);

    if (item && item.quantity) {
      item.quantity += itemCount ? +itemCount : 1;
    } else {
      cart.push({ item: product, quantity: itemCount ? +itemCount : 1 });
    }

    setCart(cart);
    setOpenedModal(false);
  };

  return (
    <>
      <div className="w-full h-full bg-white shadow-lg rounded-lg overflow-hidden pt-0">
        <div className="absolute mt-2 mr-2 right-0">
          <button
            onClick={() => {
              setOpenedModal(false);
            }}
            className="bg-gold-100 focus:outline-none transform transition duration-200 hover:scale-110 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
          >
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
        </div>
        <img
          className="h-56 w-full object-cover"
          src={product.images ? product.images[0] : 'TODO Default'}
          alt=""
        />

        <div className="px-6 py-2">
          <div className="flex items-center pb-4">
            <h1 className="font-bold font-pompiere text-3xl">{product.name}</h1>
            <h1 className="font-bold text-xl pl-5 pt-1">{unitPrice} €</h1>
          </div>
          <ShowMoreText
            lines={5}
            more={t('comment.showMore')}
            less=""
            anchorClass="text-gold-100 ml-1"
          >
            {product.description}
          </ShowMoreText>
        </div>
        <div className="flex items-center justify-end px-4 py-2">
          <div className="flex justify-center py-4">
            <Stepper itemCount={itemCount} setItemCount={setItemCount} />
          </div>
          <LabelButton
            onClick={manageAdd}
            label={t('quickShop.addFor', {
              price,
            })}
          />
        </div>
      </div>
    </>
  );
};

export default QuickShop;
