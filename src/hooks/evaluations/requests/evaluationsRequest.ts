export default class EvaluationsRequest {
  author: string | undefined;
  subject: string | undefined;
  content: string | undefined;
  mark: number | undefined;

  constructor(
    author: string | undefined,
    subject: string | undefined,
    content: string | undefined,
    mark: number | undefined,
  ) {
    this.author = author;
    this.subject = subject;
    this.content = content;
    this.mark = mark;
  }
}
