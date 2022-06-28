import { useToken } from '../auth/token';
import { useQuery } from 'react-query';
import { parseJwt } from '../utils/jwt';
import UserProfile from './UserProfile';
import { authenticatedRequest } from '../common/request';
import ProfileModel from '../../components/Profile/ProfileModel';
import UpdateProfileRequest from './requests/UpdateProfileRequest';
import ChangePasswordRequest from './requests/ChangePasswordRequest';
import UpdatePasswordRequest from './requests/UpdatePasswordRequest';
import ResetPasswordRequest from './requests/ResetPasswordRequest';

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

const updateProfile = async (request: UpdateProfileRequest): Promise<any> => {
  const { data } = await authenticatedRequest({
    url: `/user/me`,
    method: 'PUT',
    data: request,
  });

  return data;
};

const updatePassword = async (request: ChangePasswordRequest): Promise<any> => {
  return await authenticatedRequest({
    url: `/auth/me/password`,
    method: 'POST',
    data: request,
  });
};

const askResetPassword = async (
  request: UpdatePasswordRequest,
): Promise<any> => {
  return await authenticatedRequest({
    url: `/auth/me/password`,
    method: 'PUT',
    data: request,
  });
};

const resetPassword = async (request: ResetPasswordRequest): Promise<any> => {
  return await authenticatedRequest({
    url: `/auth/me/password/reset`,
    method: 'POST',
    data: request,
  });
};

export { updateProfile, updatePassword, askResetPassword, resetPassword };
