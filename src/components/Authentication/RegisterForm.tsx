import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalContent from '../NavMenu/ModalContentEnum';
import Label from '../utils/Label';
import TextButton from './TextButton';
import Title from '../utils/Title';
import '../../assets/css/_phone-input.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import RegisterRequest from '../../hooks/auth/requests/RegisterRequest';
import { register } from '../../hooks/auth/register';
import { wait } from '@testing-library/user-event/dist/utils';
import PasswordInput from '../utils/PasswordInput';
import { Link } from 'react-router-dom';

interface RegisterProps {
  setModalContent: (content: ModalContent) => void;
}

const RegisterForm: React.FC<RegisterProps> = ({ setModalContent }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<any>();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

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

    const request = new RegisterRequest(
      event.target.lastname.value,
      event.target.firstname.value,
      event.target.email.value,
      event.target.phone.value,
      event.target.password.value,
    );
    try {
      await register(request);
      setMessage(t('authentication.register.apiResponses.success'));
      setStatus('Success');
      await wait(2000);
      setModalContent(ModalContent.LOGIN);
    } catch (e) {
      setMessage(t('authentication.register.apiResponses.failure'));
      setStatus('Error');
    }
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

          <div className="mb-4">
            <PhoneInput
              id="phone"
              defaultCountry="FR"
              placeholder="Phone number"
              value={value}
              onChange={setValue}
            />
          </div>

          <div className="mb-4">
            <PasswordInput
              id={'password'}
              placeholder={t('authentication.register.password')}
            />
          </div>

          <div className="mb-8">
            <PasswordInput
              id={'passwordConfirmed'}
              placeholder={t('authentication.register.confirmPassword')}
            />
          </div>

          <div className="flex justify-center mb-4 inline-flex items-center">
            <input
              type="checkbox"
              className="appearance-none border-gray-400 text-gold-100 focus:ring-gold-100 rounded"
              required={true}
            />
            <span className="ml-2 text-sm font-semibold">
              {t('authentication.register.agree')}
              <Link to={'/cgu'} target="_blank" rel="noopener noreferrer">
                <TextButton
                  setModalContent={() => {}}
                  label={t('authentication.register.cgu')}
                  color={'text-gold-100'}
                  bold={true}
                />
              </Link>
              {t('authentication.register.andPrivacy')}
              <Link to={'/privacy'} target="_blank" rel="noopener noreferrer">
                <TextButton
                  setModalContent={() => {}}
                  label={t('authentication.register.privacy')}
                  color={'text-gold-100'}
                  bold={true}
                />
              </Link>
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
