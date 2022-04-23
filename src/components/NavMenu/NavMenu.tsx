import { Dialog, Popover, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { MenuIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import cakeAnimation from '../../assets/lotties/cakerun.json';
import CartModal from '../Cart/CartModal';
import { useCart } from '../../hooks/cart/cartHook';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const NavMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { data: cartData } = useCart();
  const cart = cartData ? cartData : [];
  const { t } = useTranslation();

  const navigation = {
    pages: [
      { name: t('navigation.sweets'), link: '/' },
      { name: t('navigation.recipes'), link: '/recipes' },
      { name: t('navigation.events'), link: '/events' },
    ],
  };

  return (
    <>
      <div className="bg-white z-10">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.link}
                      className="-m-2 p-2 block font-medium text-gray-900 font-birthstone text-2xl"
                    >
                      <div key={page.name} className="flow-root">
                        <a href={page.link}>{page.name}</a>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">{t('menu.signIn')}</div>
                  <div className="flow-root">{t('menu.register')}</div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white z-10">
          <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <span className="sr-only">Workflow</span>
                  {/*// @ts-ignore*/}
                  <Lottie
                    className="h-16 w-auto"
                    loop
                    animationData={cakeAnimation}
                    play
                  />
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigation.pages.map((page) => (
                      <Popover key={page.name} className="flex">
                        {({ open }) => (
                          <>
                            <Link
                              to={page.link}
                              className="relative z-10 flex items-center text-sm font-medium border-b-2 -mb-px pt-px font-birthstone text-2xl"
                            >
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-indigo-600 text-indigo-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    '',
                                  )}
                                >
                                  {page.name}
                                </Popover.Button>
                              </div>
                            </Link>
                          </>
                        )}
                      </Popover>
                    ))}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <div className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      {t('menu.signIn')}
                    </div>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <div className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      {t('menu.register')}
                    </div>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <div
                      onClick={() => setCartOpen(true)}
                      className="group -m-2 p-2 flex items-center"
                    >
                      <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cart.length}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Transition.Root show={cartOpen} as={Fragment}>
        <Dialog
          as="div"
          className="z-50 fixed inset-0 overflow-hidden"
          onClose={setCartOpen}
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

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <CartModal setOpenedModal={setCartOpen} />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NavMenu;
