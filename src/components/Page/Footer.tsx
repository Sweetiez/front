import React from 'react';
import Socials from '../Contacts/Socials';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-center bg-gray-900 text-white">
      <div className="grid place-items-center justify-items-center pt-6">
        <div className="flex">
          <Link to="/privacy" className="p-2 hover:underline">
            {t('footer.privacy')}
          </Link>
          <Socials color={''} />
          <Link to="/cgu" className="p-2 hover:underline">
            {t('footer.terms')}
          </Link>
        </div>
      </div>
      <div className="justify-items-center p-4">© 2022 - FI-Sweets</div>
    </footer>
  );
};

export default Footer;
