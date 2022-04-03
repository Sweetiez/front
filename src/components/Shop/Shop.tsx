import React, { Fragment, useCallback, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ProductCard from './ProductCard';
import { fakeProducts } from '../../assets/FakeProducts';
import ProductDetailModal from '../Product/ProductDetailModal';
import QuickShop from './QuickShop';

const Shop: React.FC = () => {
  const products = fakeProducts;
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(products[0]); // default value?
  const [modalState, setModalState] = useState(false);

  const manageBasketClick = useCallback((product, state) => {
    setCurrentProduct(product);
    setModalState(state);
  }, []);

  const manageImageClick = useCallback((product) => {
    setOpen(true);
    setCurrentProduct(product);
  }, []);

  const manageAddClick = useCallback(() => {
    setOpen(false);
    setModalState(true);
  }, []);

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-end-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onImageClick={manageImageClick}
                openBasket={manageBasketClick}
              />
            ))}
          </div>
          {/*Modal Cart*/}
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
                    <QuickShop
                      product={currentProduct}
                      setOpenedModal={setModalState}
                    />
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          {/*Modal Sidebar left*/}
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pl-10">
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="z-50 fixed inset-0 overflow-hidden"
                onClose={setOpen}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterTo="translate-x-0"
                      enterFrom="-translate-x-full"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveTo="-translate-x-full"
                      leaveFrom="translate-x-0"
                    >
                      <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl ">
                          <ProductDetailModal
                            manageAddClick={manageAddClick}
                            product={currentProduct}
                          />
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default Shop;
