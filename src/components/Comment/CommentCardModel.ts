import {Voter} from "./Voter";

export default class CommentCardModel {
  id: string | undefined;
  content: string | undefined;
  voter: Voter | undefined;
  mark: number | undefined;
  date: string | undefined;
}
