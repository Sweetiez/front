export default class RegisterToFaceToFaceEventRequest {
  eventId: string;
  subscriber: string;

  constructor(eventId: string, subscriber: string) {
    this.eventId = eventId;
    this.subscriber = subscriber;
  }
}
