import React from 'react';
import { RewardModel } from './RewardModel';
import { useTranslation } from 'react-i18next';
import LabelButton from '../../Button/LabelButton';
import { useQueryClient } from 'react-query';
import { setReward } from '../../../hooks/rewards/rewardsHook';

interface RewardCardProps {
  reward: RewardModel;
  userLoyaltyPoints: number;
}

const RewardCard: React.FC<RewardCardProps> = ({
  reward,
  userLoyaltyPoints,
}) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  async function handleRewardSelection() {
    setReward(reward);
    await queryClient.invalidateQueries('selected-reward');
  }

  return (
    <div className="flex bg-white shadow m-3 rounded-lg p-2">
      <img
        src={reward.productImage}
        alt="product-img"
        className=" w-16  object-cover  h-16 rounded-xl"
      />
      <div className="flex flex-col justify-center w-full px-2 py-1">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col">
            <h2 className="text-sm font-medium">{reward.name}</h2>
          </div>
          {userLoyaltyPoints >= (reward?.cost ? reward.cost : 999999) ? (
            <LabelButton
              onClick={handleRewardSelection}
              label={t('checkout.cart.rewards.modal_button')}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex pt-2  text-sm text-gray-400">
          <div className="flex items-center mr-auto">
            <p className="font-normal">{reward.productName}</p>
          </div>
          <div className="flex items-center font-medium text-gray-900 ">
            {reward.cost}{' '}
            <span className="mr-2 text-gray-400 text-sm font-normal">
              {t('checkout.cart.rewards.modal_points')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
