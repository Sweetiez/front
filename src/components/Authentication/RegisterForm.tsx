import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalContent from '../NavMenu/ModalContentEnum';

interface RegisterProps {
  setModalContent: (content: ModalContent) => void;
}

const RegisterForm: React.FC<RegisterProps> = ({ setModalContent }) => {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <div className="py-6">
          <span className="font-bold font-pompiere text-3xl">
            {t('authentication.register.title')}
          </span>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
            id="lastname"
            type="text"
            placeholder={t('authentication.register.lastname')}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
            id="firstname"
            type="text"
            placeholder={t('authentication.register.firstname')}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
            id="email"
            type="text"
            placeholder={t('authentication.register.email')}
          />
        </div>
        <div className="mb-8 flex items-center">
          <input
            className="shadow appearance-none -mr-8 border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
            id="password"
            type={passwordShown ? 'text' : 'password'}
            placeholder={t('authentication.register.password')}
          />
          <svg
            style={!passwordShown ? { display: 'block' } : { display: 'none' }}
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={togglePassword}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>

          <svg
            style={passwordShown ? { display: 'block' } : { display: 'none' }}
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={togglePassword}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </div>

        <div className="flex justify-center mb-4 inline-flex items-center">
          <input
            type="checkbox"
            className="appearance-none border-gray-400 text-gold-100 focus:ring-gold-100 rounded"
          />
          <span className="ml-2 text-sm font-semibold">
            {t('authentication.register.agree')}
            <a href="#" className="ml-1 text-gold-100">
              {t('authentication.register.cgu')}
            </a>
          </span>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
            type="button"
          >
            {t('authentication.register.signUp')}
          </button>
        </div>
      </div>
      <div className="flex justify-center border-t py-4">
        <span>{t('authentication.register.haveAccount')}</span>
        <a
          className="ml-1 hover:text-gold-100 underline"
          href="#"
          onClick={() => setModalContent(ModalContent.LOGIN)}
        >
          {t('authentication.register.signIn')}
        </a>
      </div>
    </>
  );
};

export default RegisterForm;
