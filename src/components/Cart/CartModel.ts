import SweetDetailModel from '../Product/SweetDetailModel';
import ProductCardModel from '../Shop/ProductCardModel';
import TrayDetailModel from '../Product/TrayDetailModel';

export default class CartModel {
  item: SweetDetailModel | TrayDetailModel | ProductCardModel | undefined;
  quantity: number | undefined;
}
