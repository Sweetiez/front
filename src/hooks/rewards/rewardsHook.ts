import { useQuery } from 'react-query';
import { commonRequest } from '../common/request';
import { RewardModel } from '../../components/Checkout/rewards/RewardModel';

export function useRewards() {
  return useQuery<RewardModel[], Error>(`rewards`, async () => {
    const { data } = await commonRequest({
      url: `rewards`,
    });

    return data;
  });
}

export function useSelectedReward() {
  return useQuery<RewardModel, Error>(`selected-reward`, async () => {
    console.log('useSelectedReward');
    return getReward();
  });
}

export function getReward(): RewardModel {
  const reward = localStorage.getItem('reward');
  return reward ? JSON.parse(reward) : undefined;
}

export function setReward(reward: RewardModel | undefined): void {
  if (reward) {
    localStorage.setItem('reward', JSON.stringify(reward));
  } else {
    localStorage.removeItem('reward');
  }
}
