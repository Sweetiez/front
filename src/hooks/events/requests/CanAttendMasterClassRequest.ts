export default class CanAttendMasterClassRequest {
  eventID: string;
  participantID: string;

  constructor(eventID: string, participantID: string) {
    this.eventID = eventID;
    this.participantID = participantID;
  }
}
