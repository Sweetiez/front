import Page from './Page/Page';
import NavMenu from './NavMenu/NavMenu';
import React from 'react';
import {useTranslation} from "react-i18next";

const Cgu: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <NavMenu />
            <div className="px-10 privacy">
                <h1 className="text-center font-birthstone text-4xl font-bold mt-8">
                    {t('cgu.title')}
                </h1>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.title')}</h1>
                <p>
                    {t('cgu.cgv.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.accept.title')}</h1>
                <p>
                    {t('cgu.cgv.accept.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.serviceAccess.title')}</h1>
                <p>
                    {t('cgu.cgv.serviceAccess.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.customerService.title')}</h1>
                <p>
                    {t('cgu.cgv.customerService.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.products.title')}</h1>
                <p>
                    {t('cgu.cgv.products.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.orders.title')}</h1>
                <p>
                    {t('cgu.cgv.orders.content')}
                </p>

                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.orderControl.title')}</h1>
                <p>
                    {t('cgu.cgv.orderControl.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.prices.title')}</h1>
                <p>
                    {t('cgu.cgv.prices.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.payment.title')}</h1>
                <p>
                    {t('cgu.cgv.payment.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.discounts.title')}</h1>
                <p>
                    {t('cgu.cgv.discounts.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.complianceOnDelivery.title')}</h1>
                <p>
                    {t('cgu.cgv.complianceOnDelivery.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.sponsorship.title')}</h1>
                <p>
                    {t('cgu.cgv.sponsorship.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.rightOfWithdrawal.title')}</h1>
                <p>
                    {t('cgu.cgv.rightOfWithdrawal.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.guarantee.title')}</h1>
                <p>
                    {t('cgu.cgv.guarantee.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.personalData.title')}</h1>
                <p>
                    {t('cgu.cgv.personalData.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.properties.title')}</h1>
                <p>
                    {t('cgu.cgv.properties.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.applicableLaw.title')}</h1>
                <p>
                    {t('cgu.cgv.applicableLaw.content')}
                </p>
                <h1 className="text-xl font-bold mt-8">{t('cgu.cgv.nullity.title')}</h1>
                <p className="mb-8">
                    {t('cgu.cgv.nullity.content')}
                </p>
            </div>
        </Page>
    );
};

export default Cgu;
