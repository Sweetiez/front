import LocalisationModel from './LocalisationModel';
import ScheduleModel from './ScheduleModel';
import AvailabilityModel from './AvailabilityModel';

export default class EventModel {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  localisation: LocalisationModel | undefined;
  schedule: ScheduleModel | undefined;
  availability: AvailabilityModel | undefined;
  subscribers: string[] | undefined;
}
