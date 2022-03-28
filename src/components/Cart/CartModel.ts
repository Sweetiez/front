import ProductCardModel from '../Shop/ProductCardModel';

export default class CartModel {
  item: ProductCardModel | undefined;
  quantity: number | undefined;
}
