import { useToken } from '../auth/token';
import { useQuery } from 'react-query';
import { parseJwt } from '../utils/jwt';
import UserProfile from './UserProfile';

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
