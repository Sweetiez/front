import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProfile } from '../../hooks/user/users';
import { logout } from '../../hooks/auth/logout';
import {Link, useNavigate} from 'react-router-dom';

const UserMenu = () => {
  const { t } = useTranslation();
  const profile = useProfile();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/')
  }

  return (
    <>
      <span className="pr-1 flex-1 font-medium text-gray-900 font-birthstone text-2xl p-2 lg:block hidden">
        {t('menu.welcome')}
      </span>
      <div className="group inline-block">
        <button className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center">
          <span className="font-medium font-birthstone text-2xl p-2 block">
            {profile?.name}
          </span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul className="bg-white border rounded-lg transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
          <button>
            <Link to="/user/profile">
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 font-birthstone text-2xl">
                {t('menu.userMenu.myAccount')}
              </li>
            </Link>
            <Link to="/user/order">
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 font-birthstone text-2xl">
                {t('menu.userMenu.myOrders')}
              </li>
            </Link><Link to="/user/events">
              <li className="rounded-sm px-3 py-1 hover:bg-gray-100 font-birthstone text-2xl">
                {t('menu.userMenu.myEvents')}
              </li>
            </Link>
            <li
              className="rounded-sm px-3 py-1 hover:bg-gray-100 font-birthstone text-2xl"
              onClick={handleLogout}
            >
              {t('menu.userMenu.logout')}
            </li>
          </button>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
