import CartModel from '../../../components/Cart/CartModel';

export default class CreateOrderRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupDate: string;
  products: ProductOrderRequest[];
  rewardId: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    pickupDate: string,
    cart: CartModel[],
    rewardId: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.pickupDate = pickupDate;
    this.products = cart.map((item) => {
      return new ProductOrderRequest(
        item?.item?.id ? item.item.id : '',
        item?.type ? item.type : '',
        item?.quantity ? item.quantity : -1,
      );
    });
    this.rewardId = rewardId;
  }
}

class ProductOrderRequest {
  productId: string;
  type: string;
  quantity: number;

  constructor(productId: string, type: string, quantity: number) {
    this.productId = productId;
    this.type = type;
    this.quantity = quantity;
  }
}
