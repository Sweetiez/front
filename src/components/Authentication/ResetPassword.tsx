import React, { useState } from 'react';
import Page from '../Page/Page';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../utils/Title';
import { useTranslation } from 'react-i18next';
import PasswordInput from '../utils/PasswordInput';
import Label from '../utils/Label';
import ResetPasswordRequest from '../../hooks/user/requests/ResetPasswordRequest';
import { resetPassword } from '../../hooks/user/users';
import { wait } from '@testing-library/user-event/dist/utils';

const ResetPassword: React.FC = () => {
  const { t } = useTranslation();
  let { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();

    if (
      !/\d/.test(
        event.target.newPassword.value ||
          !/[a-z]/.test(event.target.newPassword.value) ||
          !/[A-Z]/.test(event.target.newPassword.value),
      )
    ) {
      setMessage(t('profile.forms.editPassword.error.newPasswordFormat'));
      setStatus('Error');
      return;
    }

    if (event.target.newPassword.value.length < 8) {
      setMessage(t('profile.forms.editPassword.error.newPasswordLength'));
      setStatus('Error');
      return;
    }

    if (
      event.target.newPassword.value !== event.target.newPasswordConfirmed.value
    ) {
      setMessage(t('profile.forms.editPassword.error.newPasswordConfirmed'));
      setStatus('Error');
      return;
    }

    setMessage('');
    setStatus('');

    const request = new ResetPasswordRequest(
      token ? token : '',
      event.target.newPassword.value,
      event.target.newPasswordConfirmed.value,
    );

    await resetPassword(request);
    setMessage(t('authentication.forgottenPassword.resetSuccess'));
    setStatus('Success');
    await wait(2000);
    navigate('/');
  }

  return (
    <Page>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
        <div className="md:col-end-2 lg:col-start-2 lg:col-end-4 2xl:col-start-3 2xl:col-end-5 px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
          <Title label={t('profile.forms.editPassword.title')} />
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <PasswordInput
                id={'newPassword'}
                label={t('profile.forms.editPassword.newPassword')}
                placeholder={t('profile.forms.editPassword.newPassword')}
              />
            </div>
            <div className="mb-8">
              <PasswordInput
                id={'newPasswordConfirmed'}
                placeholder={t('profile.forms.editPassword.confirmNewPassword')}
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
                {t('profile.forms.validate')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default ResetPassword;
