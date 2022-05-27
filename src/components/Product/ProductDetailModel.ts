import CommentCardModel from '../Comment/CommentCardModel';
import EvaluationModel from './EvaluationModel';

export default class ProductDetailModel {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  price: number | undefined;
  images: string[] | undefined;
  evaluation: EvaluationModel | undefined;
  comments: CommentCardModel[] | undefined;
}
