export default class ReportEvaluationRequest {
  reason: number | undefined;
  reporterId: string | undefined;
  evaluationId: string | undefined;
  content: string | undefined;

  constructor(
    reason: number | undefined,
    reporterId: string | undefined,
    evaluationId: string | undefined,
    content: string | undefined,
  ) {
    this.reason = reason;
    this.reporterId = reporterId;
    this.evaluationId = evaluationId;
    this.content = content;
  }
}
