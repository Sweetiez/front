import { commonRequest, loginRequest } from '../common/request';
import LoginRequest from './requests/LoginRequest';
import RegisterRequest from './requests/RegisterRequest';

const login = async (request: LoginRequest): Promise<string> => {
  const token = await loginRequest({
    url: `/auth/login`,
    method: 'POST',
    data: {
      username: request.username,
      password: request.password,
    },
  });
  return token.slice(7);
};

const register = async (request: RegisterRequest): Promise<any> => {
  const { data } = await commonRequest({
    url: `/auth/subscribe`,
    method: 'POST',
    data: request,
  });

  return data;
};

export { login, register };
