import React from 'react';
import { useTranslation } from 'react-i18next';

interface AuthMenuProps {
  setLoginModalState: () => void;
  setRegisterModalState: () => void;
}

const AuthMenu: React.FC<AuthMenuProps> = ({
  setLoginModalState,
  setRegisterModalState,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <div
          className="text-sm font-medium hover:text-gray-800"
          onClick={setLoginModalState}
        >
          <span className="font-birthstone text-2xl hover:text-gold-100 font-medium cursor-pointer">
            {t('menu.signIn')}
          </span>
        </div>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        <div
          className="text-sm font-medium hover:text-gray-800"
          onClick={setRegisterModalState}
        >
          <span className="font-birthstone text-2xl hover:text-gold-100 font-medium cursor-pointer">
            {t('menu.register')}
          </span>
        </div>
      </div>
    </>
  );
};

export default AuthMenu;
