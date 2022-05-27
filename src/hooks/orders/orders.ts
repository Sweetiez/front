import CreateOrderRequest from './requests/CreateOrderRequest';
import { commonRequest } from '../common/request';

export async function createAnOrder(request: CreateOrderRequest) {
  const { data } = await commonRequest({
    url: '/order',
    method: 'POST',
    data: request,
  });
  return data;
}
