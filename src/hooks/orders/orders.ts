import CreateOrderRequest from './requests/CreateOrderRequest';
import { authenticatedRequest, commonRequest } from '../common/request';
import { useQuery } from 'react-query';
import OrderModel from '../../components/Order/OrderModel';

export function useUserOrders() {
  return useQuery<OrderModel[], Error>(`user-order`, async () => {
    const { data } = await authenticatedRequest({
      url: `order/me`,
    });

    return data;
  });
}

export async function createAnOrder(request: CreateOrderRequest) {
  const { data } = await commonRequest({
    url: '/order',
    method: 'POST',
    data: request,
  });
  return data;
}

export async function createPaymentIntent(orderId: string) {
  const { data } = await commonRequest({
    url: `/payment/intent/${orderId}`,
    method: 'POST',
  });
  return data;
}

export function storeTempEmail(email: string) {
  localStorage.setItem('tempEmail', email);
}

export function getTempEmail() {
  return localStorage.getItem('tempEmail');
}

export function removeTempEmail() {
  localStorage.removeItem('tempEmail');
}
