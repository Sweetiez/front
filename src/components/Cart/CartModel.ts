import ProductDetailModel from "../Product/ProductDetailModel";
import ProductCardModel from "../Shop/ProductCardModel";

export default class CartModel {
  item: ProductDetailModel | ProductCardModel | undefined;
  quantity: number | undefined;
}
