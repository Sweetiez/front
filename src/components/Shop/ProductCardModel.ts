import CommentCardModel from '../Comment/CommentCardModel';

export default class ProductCardModel {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  price: number | undefined;
  image: string | undefined;
  rating: number | undefined;
  comments: CommentCardModel[] | undefined;
}
