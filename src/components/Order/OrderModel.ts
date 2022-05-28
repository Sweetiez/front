export default class OrderModel {
  id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  createdAt: string | undefined;
  pickupDate: string | undefined;
  products: [] | undefined;
  status: string | undefined;
  totalPrice: number | undefined;
}
