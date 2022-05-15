import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalContent from '../NavMenu/ModalContentEnum';
import TextButton from './TextButton';
import Title from './Title';

interface LoginProps {
  setModalContent: (content: ModalContent) => void;
}

const LoginForm: React.FC<LoginProps> = ({ setModalContent }) => {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const signInUser = async (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <Title label={t('authentication.login.title')} />
        <form onSubmit={signInUser}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="email"
              type="email"
              placeholder={t('authentication.login.email')}
            />
          </div>
          <div className="mb-1 flex items-center ">
            <input
              className="shadow appearance-none -mr-8 border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="password"
              type={passwordShown ? 'text' : 'password'}
              placeholder={t('authentication.login.password')}
            />
            <svg
              style={
                !passwordShown ? { display: 'block' } : { display: 'none' }
              }
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
          <div className="flex items-center justify-end mb-8">
            <TextButton
              setModalContent={() =>
                setModalContent(ModalContent.FORGOTTEN_PASSWORD)
              }
              label={t('authentication.login.forgotPassword')}
              small={true}
              underline={true}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
              type="submit"
            >
              {t('authentication.login.signIn')}
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center border-t py-4">
        <span>{t('authentication.login.noAccount')}</span>
        <TextButton
          setModalContent={() => setModalContent(ModalContent.REGISTER)}
          label={t('authentication.login.register')}
          small={true}
          underline={true}
        />
      </div>
    </>
  );
};

export default LoginForm;
