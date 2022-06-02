import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Page from '../Page/Page';
import { useTranslation } from 'react-i18next';
import { useUserProfile } from '../../hooks/user/users';
import crown from '../../assets/lotties/crown.json';
import Lottie from 'react-lottie-player';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const { data: profileData } = useUserProfile();

  return (
    <Page>
      <NavMenu />
      <div className="bg-gray-100 flex-auto items-center md:px-40 py-10">
        <div className="bg-white rounded-lg p-6 flex-col">
          <div className="flex justify-center">
            <span className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 font-birthstone">
              {profileData?.firstName} {profileData?.lastName}
            </span>
          </div>
          <div className="flex justify-center items-center">
            <svg
              className="h-4 w-4 text-grayBlue-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-sm leading-normal mt-0 text-grayBlue-400 font-bold pl-1">
              {profileData?.email}
            </span>
          </div>
          <div className="flex justify-center items-center">
            <svg
              className="h-4 w-4 text-grayBlue-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm leading-normal text-grayBlue-400 font-bold pl-1">
              {profileData?.phone ? profileData?.phone : t('profile.noPhone')}
            </span>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex text-grayBlue-200 hover:text-gold-100 cursor-pointer p-2">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <span className="text-xs pl-0.5">
                {t('profile.changePassword')}
              </span>
            </div>
            <div className="flex text-grayBlue-200 hover:text-gold-100 cursor-pointer p-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
              <span className="text-xs pl-0.5">{t('profile.edit')}</span>
            </div>
          </div>
          <div className="py-10 border-t border-blueGray-200 text-center">
            <div className="">
              <Lottie className="h-20 w-auto" loop animationData={crown} play />
              <span>74 points de fidélité</span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Profile;
