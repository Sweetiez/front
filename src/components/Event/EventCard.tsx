import React from 'react';
import EventModel from './models/EventModel';
import { useTranslation } from 'react-i18next';
import moment from "moment";
import {useTokenAvailable} from "../../hooks/auth/tokenHook";
import LabelButton from "../Button/LabelButton";
import {registerToFaceToFaceEvent} from "../../hooks/events/events";
import {useUserProfile} from "../../hooks/user/users";
import '../../assets/css/product-details.css';

interface RecipeCardProps {
  event: EventModel;
}

const EventCard: React.FC<RecipeCardProps> = ({ event }) => {
  const { t } = useTranslation();
  const date = event.schedule ? moment(event.schedule.start).format("Do MMMM YYYY, hh:mm")+ ' - ' + moment(event.schedule.end).format("hh:mm") : undefined
  const availability = event.availability ? t('events.availability') + event.availability.placeTaken + " / " + event.availability?.totalPlaces:  undefined
  const {data : user} = useUserProfile()
  const { data: token } = useTokenAvailable()

  const register = () => {
    if(event && event.id && user && user.id){
      registerToFaceToFaceEvent({eventId: event.id, subscriber: user.id}).then(response => {
        // display success or error
      })
    }
  }

  return (
    <>
      <div className="relative  my-3 mx-3 lg:mx-5  flex flex-wrap justify-center">
        <div className="relative w-60 xl:w-64  min-w-full bg-white shadow-md rounded-2xl py-0 my-0 cursor-pointer border transform transition duration-500 hover:scale-105">
          <div className="p-3 ">
            <div className="">
              <span className="text-2xl font-pompiere">{event.title}</span>
              <div className="text-lg font-pompiere overflow-auto h-40">
                <span>{event.description}</span>
              </div>

              {event.localisation && (
                  <div className="mt-4 font-pompiere text-right">
                    <span>{event.localisation?.address}, {event.localisation?.city} {event.localisation?.zipCode}</span>
                  </div>
              )}
              {date && (
                  <div className="font-pompiere text-right">
                    <span>{date}</span>
                  </div>
              )}
              {availability && (
                  <div className="font-pompiere text-right">
                    <span>{availability}</span>
                  </div>
              )}
              {
                token && (
                    <div className="absolute bottom-1 left-2 ">
                      <LabelButton
                          label={t('events.register')}
                          onClick={() => register()}
                      />
                    </div>
                  )
              }
            </div>
          </div>
        </div>
       </div>
    </>
  );
};

export default EventCard;
