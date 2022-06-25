import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LabelButton from '../../Button/LabelButton';
import Modal from '../../utils/Modal';
import RewardModal from './RewardModal';
import { useSelectedReward } from '../../../hooks/rewards/rewardsHook';
import RewardCard from './RewardCard';

const RewardSelector: React.FC = () => {
  const { t } = useTranslation();
  const { data: rewardsData } = useSelectedReward();
  const [rewardOpen, setRewardOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
          {t('checkout.cart.rewards.title')}
        </h3>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b" />
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center w-full">
            {rewardsData ? (
              <>
                <RewardCard reward={rewardsData} userLoyaltyPoints={0} />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <LabelButton
          label={t('checkout.cart.rewards.button')}
          onClick={() => setRewardOpen(true)}
        />
      </div>
      <Modal
        modalContent={<RewardModal />}
        modalState={rewardOpen}
        setModalState={() => setRewardOpen(false)}
      />
    </>
  );
};

export default RewardSelector;
