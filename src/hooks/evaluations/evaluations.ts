import { authenticatedRequest } from '../common/request';
import EvaluationsRequest from './requests/evaluationsRequest';

const createEvaluation = async (request: EvaluationsRequest): Promise<any> => {
  const { data } = await authenticatedRequest({
    url: `/evaluations`,
    method: 'POST',
    data: request,
  });

  return data;
};

export { createEvaluation };
