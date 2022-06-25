import React from 'react';
import { useUserProfile } from '../../../hooks/user/users';
import { useTranslation } from 'react-i18next';
import RewardCard from './RewardCard';
import { setReward, useRewards } from '../../../hooks/rewards/rewardsHook';
import { useQueryClient } from 'react-query';
import LabelButton from '../../Button/LabelButton';

const RewardModal: React.FC = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { data: profileData, isLoading: isProfileLoading } = useUserProfile();
  const { data: rewardsData } = useRewards();

  async function handleRewardRemove() {
    setReward(undefined);
    await queryClient.invalidateQueries('selected-reward');
  }

  return (
    <>
      {isProfileLoading ? (
        <></>
      ) : (
        <>
          <>
            <h3 className="p-2 text-xl dark:text-white font-semibold leading-5 text-gray-800">
              {t('checkout.cart.rewards.modal_title')}{' '}
              {profileData?.loyaltyPoints}{' '}
              {t('checkout.cart.rewards.modal_loyalty_pts')}
            </h3>
            <p className="pl-2 pb-4">
              {t('checkout.cart.rewards.modal_subtitle')}
            </p>
          </>
          <div className="flex justify-center">
            <LabelButton
              label={t('checkout.cart.rewards.modal_button_none')}
              onClick={handleRewardRemove}
            />
          </div>
          {rewardsData?.map((reward: any) => {
            return (
              <RewardCard
                key={reward.id}
                reward={reward}
                userLoyaltyPoints={
                  profileData?.loyaltyPoints ? profileData.loyaltyPoints : 0
                }
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default RewardModal;
