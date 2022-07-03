import { useQuery } from 'react-query';
import { authenticatedRequest, commonRequest } from '../common/request';
import EventModel from '../../components/Event/models/EventModel';
import RegisterToFaceToFaceEventRequest from './requests/RegisterToFaceToFaceEventRequest';

export function useFaceToFaceEvents() {
  return useQuery<EventModel[], Error>(`all-face-to-face-events`, async () => {
    const { data } = await commonRequest({
      url: `/events/face-to-face`,
    });

    return data;
  });
}

export function useStreamingEvents() {
  return useQuery<EventModel[], Error>(`all-streaming-events`, async () => {
    const { data } = await commonRequest({
      url: `/events/streaming`,
    });

    return data;
  });
}

export async function registerToFaceToFaceEvent(
  request: RegisterToFaceToFaceEventRequest,
) {
  const { data } = await authenticatedRequest({
    url: `/events/face-to-face/subscribe`,
    method: 'PUT',
    data: request,
  });
  return data;
}

export async function registerToStreamingEvent(
  request: RegisterToFaceToFaceEventRequest,
) {
  const { data } = await authenticatedRequest({
    url: `/events/streaming/subscribe`,
    method: 'PUT',
    data: request,
  });
  return data;
}
