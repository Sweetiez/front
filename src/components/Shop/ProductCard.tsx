import React, { Fragment, useState } from 'react';
import ProductCardModel from './ProductCardModel';
import Stars from '../Stars/Stars';
import { Transition, Dialog } from '@headlessui/react';
import QuickShop from './QuickShop';

interface ProductCardProps {
  product: ProductCardModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img
              className="h-40 rounded-2xl w-full object-cover"
              src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
              alt="product-item"
            />
            <p
              onClick={() => {
                setModalState(true);
              }}
              className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-50 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </p>
          </div>
          <div className="mt-4 pl-2 mb-2 flex justify-between ">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-0">
                {product.name}
              </p>
              <p className="text-md text-gray-800 mt-0">{product.price}€</p>
            </div>
            <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
              <Stars number={product.rating ? product.rating : 0} />
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={modalState} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setModalState}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <QuickShop product={product} setOpenedModal={setModalState} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ProductCard;
