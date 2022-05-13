import CommentCardModel from '../Comment/CommentCardModel';

export default class ProductDetailModel {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  price: number | undefined;
  images: string[] | undefined;
  rating: number | undefined;
  comments: CommentCardModel[] | undefined;
}
