import React from 'react';
import { useTranslation } from 'react-i18next';
import ModalContent from '../NavMenu/ModalContentEnum';
import TextButton from './TextButton';

interface ForgottenPasswordProps {
  setModalContent: (content: ModalContent) => void;
}

const ForgottenPasswordForm: React.FC<ForgottenPasswordProps> = ({
  setModalContent,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <div className="py-6">
          <span className="font-bold font-pompiere text-3xl">
            {t('authentication.forgottenPassword.title')}
          </span>
        </div>
        <div className="mb-8">
          <input
            className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
            id="email"
            type="email"
            placeholder={t('authentication.forgottenPassword.email')}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
            type="button"
          >
            {t('authentication.forgottenPassword.submit')}
          </button>
        </div>
      </div>
      <div className="flex justify-center border-t py-4">
        <TextButton
          setModalContent={() => setModalContent(ModalContent.LOGIN)}
          label={t('authentication.login.signIn')}
          small={true}
          underline={true}
        />
      </div>
    </>
  );
};

export default ForgottenPasswordForm;
