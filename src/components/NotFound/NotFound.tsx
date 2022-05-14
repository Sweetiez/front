import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Page from '../Page/Page';
import LabelButton from '../Button/LabelButton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie-player';
import notFoundAnimation from '../../assets/lotties/not-found.json';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <NavMenu />
      <div className="bg-gray-100 flex-auto items-center">
        <div className="flex flex-col md:flex-row items-center justify-center items-center px-5 text-gray-700">
          <Lottie
            className="h-auto w-auto"
            loop
            animationData={notFoundAnimation}
            play
          />
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              {t('notFound.title')}
            </p>
            <p className="mb-8">{t('notFound.subtitle')}</p>
            <Link to="/">
              <LabelButton label={t('notFound.backToHome')} />
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NotFound;
