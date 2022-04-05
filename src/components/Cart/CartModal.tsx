import { Dialog } from '@headlessui/react';
import React from 'react';
import { useCart, setCart } from '../../hooks/cart/cartHook';
import { useTranslation } from 'react-i18next';

interface CartModalProps {
  setOpenedModal: (openedModal: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ setOpenedModal }) => {
  const { t } = useTranslation();
  const { data: cartData } = useCart();
  const cart = cartData ? cartData : [];

  const totalPrice = cart.reduce(
    (acc, cartItem) =>
      acc +
      (cartItem.item?.price ? cartItem.item.price : 0) *
        (cartItem?.quantity ? cartItem.quantity : 0),
    0,
  );

  function removeFromCart(id: string) {
    // eslint-disable-next-line array-callback-return
    cart.map((cartItem) => {
      if (cartItem.item!.id === id) {
        cart.splice(cart.indexOf(cartItem), 1);
      }
    });
    // setCartItems(cartItems);
    setCart(cart);
  }

  return (
    <>
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <Dialog.Title className="text-3xl font-pompiere text-gray-900">
            {t('cart.title')}{' '}
          </Dialog.Title>
          <div className="absolute mr-3 right-0">
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
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
              {cart.map((itemCart) => (
                <li key={itemCart.item!.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={itemCart.item!.images && itemCart.item!.images[0]}
                      alt={`${itemCart.item!.name}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <span className="font-pompiere text-2xl">
                          {itemCart.item!.name}
                        </span>
                        <p className="ml-4">{itemCart.item!.price} €</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {itemCart.quantity}</p>

                      <div className="flex">
                        <button
                          onClick={() => {
                            console.log(itemCart.item);
                            removeFromCart(
                              itemCart.item?.id ? itemCart.item.id : '',
                            );
                            console.log(itemCart.item?.id);
                          }}
                          type="button"
                          className="font-medium text-gold-100 hover:text-gray-400 focus:outline-none"
                        >
                          {t('cart.remove')}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>{t('cart.subtotal')}</p>
          <p>{totalPrice} €</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">{t('cart.totalInfo')}</p>
        <div className="mt-6">
          <div className="flex items-center justify-center rounded-md border border-transparent bg-gold-100 px-6 py-3 text-base font-medium text-white shadow-sm transform transition duration-200 hover:scale-105">
            {t('cart.checkout')}
          </div>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            {t('cart.or')}{' '}
            <button
              type="button"
              className="font-medium text-gold-100 hover:text-gray-400"
              onClick={() => setOpenedModal(false)}
            >
              {t('cart.continueShopping')}
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartModal;
