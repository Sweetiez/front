import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useCallback, useMemo, useState } from 'react';
import '../../assets/css/_user-menu.css';
import { MenuIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import cakeAnimation from '../../assets/lotties/cakerun.json';
import CartModal from '../Cart/CartModal';
import { useCart } from '../../hooks/cart/cartHook';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';
import LoginForm from '../Authentication/LoginForm';
import RegisterForm from '../Authentication/RegisterForm';
import ForgottenPasswordForm from '../Authentication/ForgottenPasswordForm';
import ModalContent from './ModalContentEnum';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';
import Modal from '../utils/Modal';
import { useTokenAvailable } from '../../hooks/auth/tokenHook';
import i18n from 'i18next';
import frenchFlag from './../../assets/icons/frenchFlag.png';
import englishFlag from './../../assets/icons/englishFlag.png';

const NavMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [AuthModalState, setAuthModalState] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalContent>(
    ModalContent.LOGIN,
  );
  const [language, setLanguage] = useState(
    i18n.language || window.localStorage.i18nextLng,
  );
  const { data: cartData } = useCart();
  const { data: isTokenAvailable } = useTokenAvailable();
  const cart = cartData ? cartData : [];
  const { t } = useTranslation();

  const AuthSectionContent = isTokenAvailable ? (
    <UserMenu />
  ) : (
    <AuthMenu
      setLoginModalState={() => manageModalContentClick(ModalContent.LOGIN)}
      setRegisterModalState={() =>
        manageModalContentClick(ModalContent.REGISTER)
      }
    />
  );

  const manageModalContentClick = (content: ModalContent) => {
    setOpen(false);
    setAuthModalState(true);
    setModalState(content);
  };

  const manageCloseAuthModal = useCallback(() => {
    setAuthModalState(false);
  }, []);

  let modalContent = useMemo(() => {
    switch (modalState) {
      case ModalContent.LOGIN:
        return (
          <LoginForm
            setModalContent={setModalState}
            setModalState={manageCloseAuthModal}
          />
        );
      case ModalContent.REGISTER:
        return <RegisterForm setModalContent={setModalState} />;
      case ModalContent.FORGOTTEN_PASSWORD:
        return <ForgottenPasswordForm setModalContent={setModalState} />;
      default:
        return (
          <LoginForm
            setModalContent={setModalState}
            setModalState={manageCloseAuthModal}
          />
        );
    }
  }, [modalState, manageCloseAuthModal]);

  const navigation = {
    pages: [
      { name: t('navigation.shop'), link: '/' },
      { name: t('navigation.recipes'), link: '/recipes' },
      { name: t('navigation.events'), link: '/events' },
    ],
  };

  return (
    <>
      <div className="sticky top-8 bg-white z-10">
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
                      className="-m-2 p-2 block font-medium hover:text-gold-100 font-birthstone text-2xl"
                    >
                      <div key={page.name} className="flow-root">
                        <a href={page.link}>{page.name}</a>
                      </div>
                    </Link>
                  ))}
                </div>

                {isTokenAvailable ? (
                  <></>
                ) : (
                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    <div
                      className="flow-root"
                      onClick={() =>
                        manageModalContentClick(ModalContent.LOGIN)
                      }
                    >
                      <span className="font-birthstone text-2xl hover:text-gold-100 font-medium cursor-pointer">
                        {t('menu.signIn')}
                      </span>
                    </div>
                    <div
                      className="flow-root"
                      onClick={() =>
                        manageModalContentClick(ModalContent.REGISTER)
                      }
                    >
                      <span className="font-birthstone text-2xl hover:text-gold-100 font-medium cursor-pointer">
                        {t('menu.register')}
                      </span>
                    </div>
                  </div>
                )}
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
              <div className="h-16 flex items-center justify-center">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0 hidden lg:block">
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
                {/*<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">*/}
                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigation.pages.map((page) => (
                      // <Popover key={page.name} className="flex">
                      <div
                        key={page.name}
                        className={`flex ${
                          window.location.pathname === page.link
                            ? 'text-gold-100'
                            : ''
                        }`}
                      >
                        {/*{({ open }) => (*/}
                        <>
                          <Link
                            to={page.link}
                            className="relative z-10 flex items-center font-medium border-b-2 -mb-px pt-px font-birthstone text-2xl hover:text-gold-100"
                          >
                            <div className="relative flex">
                              <div>{page.name}</div>
                            </div>
                          </Link>
                        </>
                        {/*)}*/}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  {AuthSectionContent}

                  {/* Cart */}
                  <div className="mx-2 justify-center">
                    <div
                      onClick={() => setCartOpen(true)}
                      className="group -m-2 p-2 flex items-center"
                    >
                      <button
                        className="ease-linear transform transition-all font-semibold duration-300 hover:scale-105 grid grid-flow-col auto-cols-max outline-none r-0 items-center text-black text-xs py-1 focus:outline-none mb-1"
                        type="button"
                      >
                        <ShoppingBagIcon
                          className="flex-shrink-0 h-6 w-6 group-hover:text-gold-100"
                          aria-hidden="true"
                        />
                        {cart.length !== 0 ? (
                          <span className="absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xxs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gold-100 rounded-full">
                            {cart.length < 100 ? cart.length : '99+'}
                          </span>
                        ) : (
                          <></>
                        )}
                      </button>
                      <span className="sr-only">items in cart, view bag</span>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="group inline-block">
                      <button className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center">
                      <span className="font-medium font-birthstone text-2xl p-2 block">
                        {language === 'fr-FR' ? (
                            <img
                                src={frenchFlag}
                                alt="French Flag"
                                style={{ width: '25px', height: '15px' }}
                            />
                        ) : (
                            <img
                                src={englishFlag}
                                alt="English Flag"
                                style={{ width: '25px', height: '15px' }}
                            />
                        )}
                      </span>
                        <span>
                        <svg
                            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      </button>
                      <ul className="bg-white border rounded-lg transform scale-0 ml-1.5 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                        <button>
                          {language !== 'fr-FR' && (
                              <li
                                  className="rounded-sm px-3 py-1 hover:bg-gray-100 font-birthstone text-2xl"
                                  onClick={() => {
                                    setLanguage('fr-FR');
                                    i18n.changeLanguage('fr-FR');
                                  }}
                              >
                                <img
                                    src={frenchFlag}
                                    alt="French Flag"
                                    style={{ width: '25px', height: '15px' }}
                                />
                              </li>
                          )}
                          {language !== 'en-EN' && (
                              <li
                                  className="rounded-sm px-3 py-1 hover:bg-gray-100 font-birthstone text-2xl"
                                  onClick={() => {
                                    setLanguage('en-EN');
                                    i18n.changeLanguage('en-EN');
                                  }}
                              >
                                <img
                                    src={englishFlag}
                                    alt="English Flag"
                                    style={{ width: '25px', height: '15px' }}
                                />
                              </li>
                          )}
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Modal
        modalContent={modalContent}
        modalState={AuthModalState}
        setModalState={manageCloseAuthModal}
      />
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
