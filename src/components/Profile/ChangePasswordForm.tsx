import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../utils/Title';
import PasswordInput from '../utils/PasswordInput';
import Label from '../utils/Label';
import UpdatePasswordRequest from '../../hooks/user/requests/UpdatePasswordRequest';
import ProfileModel from './ProfileModel';
import { updatePassword } from '../../hooks/user/users';
import { wait } from '@testing-library/user-event/dist/utils';

interface ChangePasswordFormProps {
  profile?: ProfileModel;
  manageCloseModal: () => void;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  profile,
  manageCloseModal,
}) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const changePassword = async (event: any) => {
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

    const request = new UpdatePasswordRequest(
      profile?.email,
      event.target.currentPassword.value,
      event.target.newPassword.value,
    );
    try {
      await updatePassword(request);
      setMessage(t('profile.forms.editPassword.apiResponses.success'));
      setStatus('Success');
      await wait(2000);
      manageCloseModal();
    } catch (e) {
      setMessage(t('profile.forms.editPassword.apiResponses.failure'));
      setStatus('Error');
    }
  };
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <Title label={t('profile.forms.editPassword.title')} />
        <form onSubmit={changePassword}>
          <div className="mb-8">
            <PasswordInput
              id={'currentPassword'}
              label={t('profile.forms.editPassword.currentPassword')}
              placeholder={t('profile.forms.editPassword.currentPassword')}
            />
          </div>
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
    </>
  );
};

export default ChangePasswordForm;
