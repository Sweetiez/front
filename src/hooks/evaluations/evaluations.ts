import { authenticatedRequest } from '../common/request';
import EvaluationsRequest from './requests/evaluationsRequest';
import ReportEvaluationRequest from "./requests/reportEvaluationRequest";

const createEvaluation = async (request: EvaluationsRequest): Promise<any> => {
  const { data } = await authenticatedRequest({
    url: `/evaluations`,
    method: 'POST',
    data: request,
  });

  return data;
};

const reportEvaluation = async (
  request: ReportEvaluationRequest,
): Promise<any> => {
  const { data } = await authenticatedRequest({
    url: `/reports`,
    method: 'POST',
    data: request,
  });

  return data;
};

export { createEvaluation, reportEvaluation };
