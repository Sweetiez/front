import Page from './Page/Page';
import NavMenu from './NavMenu/NavMenu';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <NavMenu />
      <div className="px-10 privacy">
        <h1 className="text-center font-birthstone text-4xl font-bold mt-8">
          {t('privacy.title')}
        </h1>
        <br />
        <br />
        <p>{t('privacy.content')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.definition.title')}
        </h1>
        <p>{t('privacy.definition.content')}</p>
        <h1 className="text-xl font-bold mt-8">{t('privacy.subject.title')}</h1>
        <p>{t('privacy.subject.content')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.identity.title')}
        </h1>
        <p>{t('privacy.identity.content')}</p>
        <h1 className="text-xl font-bold mt-8">{t('privacy.collect.title')}</h1>
        <p>{t('privacy.collect.content')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.dataType.title')}
        </h1>
        <p>{t('privacy.dataType.content')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.dataFinality.title')}
        </h1>
        <table className="min-w-full divide-y divide-x divide-gray-200 border">
          <thead className="bg-gray-50">
            <tr>
              <th className="border">N°</th>
              <th className="border">
                {t('privacy.dataFinality.table.finality.title')}
              </th>
              <th className="border">
                {t('privacy.dataFinality.table.legacy.title')}
              </th>
              <th className="border">
                {t('privacy.dataFinality.table.duration.title')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-x divide-gray-200">
            <tr>
              <td className="border">1</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.one')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.one')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.one')}
              </td>
            </tr>
            <tr>
              <td className="border">2</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.two')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.two')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.two')}
              </td>
            </tr>
            <tr>
              <td className="border">3</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.three')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.three')}
              </td>
              <td className="border">
                {' '}
                {t('privacy.dataFinality.table.duration.three')}
              </td>
            </tr>
            <tr>
              <td className="border">4</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.four')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.four')}
              </td>
              <td className="border">
                {' '}
                {t('privacy.dataFinality.table.duration.four')}
              </td>
            </tr>
            <tr>
              <td className="border">5</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.five')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.five')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.five')}
              </td>
            </tr>
            <tr>
              <td className="border">6</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.six')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.six')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.six')}
              </td>
            </tr>
            <tr>
              <td className="border">7</td>
              <td className="border">
                {' '}
                {t('privacy.dataFinality.table.finality.seven')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.seven')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.seven')}
              </td>
            </tr>
            <tr>
              <td className="border">8</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.eight')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.eight')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.eight')}
              </td>
            </tr>
            <tr>
              <td className="border">9</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.nine')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.nine')}
              </td>
              <td className="border">
                {' '}
                {t('privacy.dataFinality.table.duration.nine')}
              </td>
            </tr>
            <tr>
              <td className="border">10</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.ten')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.ten')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.ten')}
              </td>
            </tr>
            <tr>
              <td className="border">11</td>
              <td className="border">
                {t('privacy.dataFinality.table.finality.eleven')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.legacy.eleven')}
              </td>
              <td className="border">
                {t('privacy.dataFinality.table.duration.eleven')}
              </td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.dataDuration.title')}
        </h1>
        <p>{t('privacy.dataDuration.content')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.dataCommunication.title')}
        </h1>
        <p>{t('privacy.dataCommunication.content')}</p>
        <h1 className="text-xl font-bold mt-8">{t('privacy.info.title')}</h1>
        <p>{t('privacy.info.content')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.dataTransfer.title')}
        </h1>
        <p>{t('privacy.dataTransfer.content')}</p>
        <h1 className="text-xl font-bold mt-8">{t('privacy.rights.title')}</h1>
        <p>{t('privacy.rights.label')}</p>
        <table className="border">
          <tbody>
            <tr>
              <td className="border">
                {t('privacy.rights.table.accessRights.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.accessRights.content')}
              </td>
            </tr>
            <tr>
              <td className="border">
                {t('privacy.rights.table.removeRights.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.removeRights.content.label')}
                <br />1 - {t('privacy.rights.table.removeRights.content.one')}
                <br />2 - {t('privacy.rights.table.removeRights.content.two')}
                <br />3 - {t('privacy.rights.table.removeRights.content.three')}
                <br />4 - {t('privacy.rights.table.removeRights.content.four')}
                <br />5 - {t('privacy.rights.table.removeRights.content.five')}
                <br />6 - {t('privacy.rights.table.removeRights.content.six')}
              </td>
            </tr>
            <tr>
              <td className="border">
                {t('privacy.rights.table.limitRights.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.limitRights.content.label')}
                <br />1 - {t('privacy.rights.table.limitRights.content.one')}
                <br />2 - {t('privacy.rights.table.limitRights.content.two')}
                <br />3 - {t('privacy.rights.table.limitRights.content.three')}
              </td>
            </tr>
            <tr>
              <td className="border">
                {t('privacy.rights.table.messageRights.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.messageRights.content')}
              </td>
            </tr>
            <tr>
              <td className="border">
                {t('privacy.rights.table.autoRights.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.autoRights.content')}
              </td>
            </tr>
            <tr>
              <td className="border">
                {t('privacy.rights.table.portability.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.portability.content.label')}
                <br />1 - {t('privacy.rights.table.portability.content.one')}
                <br />2 - {t('privacy.rights.table.portability.content.two')}
              </td>
            </tr>
            <tr>
              <td className="border">
                {t('privacy.rights.table.deathRights.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.deathRights.content')}
              </td>
            </tr>
            <tr>
              <td className="border">
                {t('privacy.rights.table.claimRights.title')}
              </td>
              <td className="border">
                {t('privacy.rights.table.claimRights.title')}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>{t('privacy.rights.table.text')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.security.title')}
        </h1>
        <p>{t('privacy.security.content')}</p>
        <h1 className="text-xl font-bold mt-8"> {t('privacy.links.title')}</h1>
        <p>{t('privacy.links.content')}</p>
        <h1 className="text-xl font-bold mt-8">
          {t('privacy.updatePrivacy.title')}
        </h1>
        <p>{t('privacy.updatePrivacy.content')}</p>
        <br />
        <br />
        <br />
      </div>
    </Page>
  );
};

export default Privacy;
