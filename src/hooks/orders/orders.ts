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

export async function createPaymentIntent(orderId: string) {
  const { data } = await commonRequest({
    url: `/order/payment-intent/${orderId}`,
    method: 'POST',
  });
  return data;
}

export async function confirmPayment(orderId: string) {
  const { data } = await commonRequest({
    url: `/order/payment-success/${orderId}`,
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
