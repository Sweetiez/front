import React from 'react';
import { useTranslation } from 'react-i18next';
import ModalContent from '../NavMenu/ModalContentEnum';
import TextButton from './TextButton';
import Title from '../utils/Title';
import UpdatePasswordRequest from '../../hooks/user/requests/UpdatePasswordRequest';
import { resetPassword } from '../../hooks/user/users';
import Label from '../utils/Label';

interface ForgottenPasswordProps {
  setModalContent: (content: ModalContent) => void;
}

const ForgottenPasswordForm: React.FC<ForgottenPasswordProps> = ({
  setModalContent,
}) => {
  const { t } = useTranslation();
  const [status, setStatus] = React.useState(false);

  const retrievePassword = async (event: any) => {
    event.preventDefault();

    const request = new UpdatePasswordRequest(event.target.email.value);
    await resetPassword(request);
    setStatus(true);
  };

  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <Title label={t('authentication.forgottenPassword.title')} />
        <form onSubmit={retrievePassword}>
          <div className="mb-8">
            <input
              className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-100 focus:border-transparent"
              id="email"
              type="email"
              placeholder={t('authentication.forgottenPassword.email')}
            />
          </div>
          {status && (
            <div className="flex justify-center mb-2">
              <Label
                status={'Success'}
                message={t('authentication.forgottenPassword.message')}
              />
            </div>
          )}

          <div className="flex justify-center">
            <button
              className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
              type="submit"
            >
              {t('authentication.forgottenPassword.submit')}
            </button>
          </div>
        </form>
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
