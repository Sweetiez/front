import { useToken } from '../auth/token';
import { useQuery } from 'react-query';
import { parseJwt } from '../utils/jwt';
import UserProfile from './UserProfile';
import { authenticatedRequest } from '../common/request';
import ProfileModel from '../../components/Profile/ProfileModel';

export function useProfile(): UserProfile | undefined {
  const { token } = useToken();

  try {
    const profile = useQuery<UserProfile, Error>('user-profile', async () => {
      if (token) {
        const parsedToken = parseJwt(token);
        return new UserProfile(parsedToken);
      }
      throw new Error('No token');
    });
    return profile.data;
  } catch (error) {
    return undefined;
  }
}

export function useUserProfile() {
  return useQuery<ProfileModel, Error>(`user-my-profile`, async () => {
    const { data } = await authenticatedRequest({
      url: `user/me`,
    });

    return data;
  });
}
