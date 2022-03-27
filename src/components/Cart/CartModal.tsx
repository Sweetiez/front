// import { Transition, Dialog } from '@headlessui/react';
// import React, { Fragment, useState } from 'react';

import { Dialog } from '@headlessui/react';
import React from 'react';

interface CartModalProps {
  setOpenedModal: (openedModal: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ setOpenedModal }) => {
  return (
    <>
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <Dialog.Title className="text-lg font-medium text-gray-900">
            {' '}
            {/*Shopping cart{' '}*/}
            Votre panier{' '}
          </Dialog.Title>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
              onClick={() => setOpenedModal(false)}
            >
              <span className="sr-only">Close panel</span>
            </button>
          </div>
        </div>

        {/*<div className="mt-8">*/}
        {/*  <div className="flow-root">*/}
        {/*    <ul role="list" className="-my-6 divide-y divide-gray-200" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <div className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Checkout
          </div>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => setOpenedModal(false)}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartModal;
