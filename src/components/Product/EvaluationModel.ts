import CommentCardModel from '../Comment/CommentCardModel';

export default class EvaluationModel {
  mark: number | undefined;
  voters: number | undefined;
  votes: [] | undefined;
  comments: CommentCardModel[] | undefined;
}
