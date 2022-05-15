import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalContent from '../NavMenu/ModalContentEnum';
import Label from '../utils/Label';
import TextButton from './TextButton';
import Title from './Title';

interface RegisterProps {
  setModalContent: (content: ModalContent) => void;
}

const RegisterForm: React.FC<RegisterProps> = ({ setModalContent }) => {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmedShown, setPasswordConfirmedShown] = useState(false);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordConfirmed = () => {
    setPasswordConfirmedShown(!passwordConfirmedShown);
  };

  const registerUser = async (event: any) => {
    event.preventDefault();

    if (
      event.target.lastname.value.length < 2 ||
      event.target.lastname.value.length > 24
    ) {
      setMessage(t('authentication.register.error.lastname'));
      setStatus('Error');
      return;
    }

    if (
      event.target.firstname.value.length < 2 ||
      event.target.firstname.value.length > 24
    ) {
      setMessage(t('authentication.register.error.firstname'));
      setStatus('Error');
      return;
    }

    if (event.target.password.value.length < 8) {
      setMessage(t('authentication.register.error.passwordLength'));
      setStatus('Error');
      return;
    }

    if (
      !/\d/.test(
        event.target.password.value ||
          !/[a-z]/.test(event.target.password.value) ||
          !/[A-Z]/.test(event.target.password.value),
      )
    ) {
      setMessage(t('authentication.register.error.passwordFormat'));
      setStatus('Error');
      return;
    }

    if (event.target.password.value !== event.target.passwordConfirmed.value) {
      setMessage(t('authentication.register.error.passwordConfirmed'));
      setStatus('Error');
      return;
    }

    setMessage('');
    setStatus('');
  };

  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <Title label={t('authentication.register.title')} />
        <form onSubmit={registerUser}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="lastname"
              type="text"
              placeholder={t('authentication.register.lastname')}
              required={true}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="firstname"
              type="text"
              placeholder={t('authentication.register.firstname')}
              required={true}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="email"
              type="email"
              placeholder={t('authentication.register.email')}
              required={true}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              className="shadow appearance-none -mr-8 border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="password"
              type={passwordShown ? 'text' : 'password'}
              placeholder={t('authentication.register.password')}
              required={true}
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

          <div className="mb-8 flex items-center">
            <input
              className="shadow appearance-none -mr-8 border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="passwordConfirmed"
              type={passwordConfirmedShown ? 'text' : 'password'}
              placeholder={t('authentication.register.confirmPassword')}
              required={true}
            />
            <svg
              style={
                !passwordConfirmedShown
                  ? { display: 'block' }
                  : { display: 'none' }
              }
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={togglePasswordConfirmed}
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
              style={
                passwordConfirmedShown
                  ? { display: 'block' }
                  : { display: 'none' }
              }
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={togglePasswordConfirmed}
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
              required={true}
            />
            <span className="ml-2 text-sm font-semibold">
              {t('authentication.register.agree')}
              <TextButton
                setModalContent={() => setModalContent(ModalContent.LOGIN)}
                label={t('authentication.register.cgu')}
                color={'text-gold-100'}
                bold={true}
              />
            </span>
          </div>
          <div className="flex justify-center mb-2">
            <Label status={status} message={message} />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
              type="submit"
            >
              {t('authentication.register.signUp')}
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center border-t py-4">
        <span>{t('authentication.register.haveAccount')}</span>
        <TextButton
          setModalContent={() => setModalContent(ModalContent.LOGIN)}
          label={t('authentication.register.signIn')}
          underline={true}
          small={true}
        />
      </div>
    </>
  );
};

export default RegisterForm;
