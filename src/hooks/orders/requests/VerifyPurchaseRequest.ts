export default class VerifyPurchaseRequest {
  email: string;
  productId: string;

  constructor(email: string, productId: string) {
    this.email = email;
    this.productId = productId;
  }
}
