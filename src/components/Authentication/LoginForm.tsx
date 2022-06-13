import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalContent from '../NavMenu/ModalContentEnum';
import TextButton from './TextButton';
import Title from '../utils/Title';
import LoginRequest from '../../hooks/auth/requests/LoginRequest';
import { login } from '../../hooks/auth/register';
import { useToken } from '../../hooks/auth/token';
import Label from '../utils/Label';
import {useRefreshToken} from "../../hooks/auth/refreshToken";
import PasswordInput from "../utils/PasswordInput";

interface LoginProps {
  setModalContent: (content: ModalContent) => void;
  setModalState: () => void;
}

const LoginForm: React.FC<LoginProps> = ({
  setModalContent,
  setModalState,
}) => {
  const { t } = useTranslation();
  const { setToken } = useToken();
  const { setRefreshToken } = useRefreshToken();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const signInUser = async (event: any) => {
    event.preventDefault();

    const request = new LoginRequest(
      event.target.email.value,
      event.target.password.value,
    );

    if (request.username?.trim() === '' || request.password?.trim() === '') {
      setMessage(t('authentication.login.error.invalidFields'));
      setStatus('Error');
      return;
    }

    try {
      const response = await login(request);
      setToken(response.token);
      setRefreshToken(response.refreshToken);
      setModalState();
    } catch (e) {
      setMessage(t('authentication.login.error.invalidFields'));
      setStatus('Error');
      return;
    }
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
          <div className="mb-1">
            <PasswordInput id={'password'} placeholder={t('authentication.login.password')}/>
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
          <div className="flex justify-center mb-2">
            <Label status={status} message={message} />
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
