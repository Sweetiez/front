import React, { useState } from 'react';
import EventModel from './models/EventModel';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useTokenAvailable } from '../../hooks/auth/tokenHook';
import LabelButton from '../Button/LabelButton';
import {
  registerToFaceToFaceEvent,
  registerToStreamingEvent,
} from '../../hooks/events/events';
import { useUserProfile } from '../../hooks/user/users';
import { useQueryClient } from 'react-query';
import Modal from '../utils/Modal';
import ErrorModal from './ErrorModal';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  event: EventModel;
  type: string;
  canSubscribe?: boolean;
  canWatch?: boolean;
}

const EventCard: React.FC<RecipeCardProps> = ({
  event,
  type,
  canSubscribe = true,
  canWatch = false,
}) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const date = event.schedule
    ? moment(event.schedule.start).format('Do MMMM YYYY, hh:mm') +
      ' - ' +
      moment(event.schedule.end).format('hh:mm')
    : undefined;
  const availability = event.availability
    ? t('events.availability') +
      event.availability.placeTaken +
      ' / ' +
      event.availability?.totalPlaces
    : undefined;
  const { data: token } = useTokenAvailable();
  const { data: user } = useUserProfile(!!token);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const alreadySubscribe =
    user && event.subscribers && event.subscribers.find((s) => s === user.id);

  const register = () => {
    if (event && event.id && user && user.id) {
      if (type === 'FACE_TO_FACE') {
        registerToFaceToFaceEvent({ eventId: event.id, subscriber: user.id })
          .then(() => {
            queryClient.invalidateQueries('all-face-to-face-events');
          })
          .catch(() => setShowErrorModal(true));
      } else {
        registerToStreamingEvent({ eventId: event.id, subscriber: user.id })
          .then(() => {
            queryClient.invalidateQueries('all-streaming-events');
          })
          .catch(() => setShowErrorModal(true));
      }
    }
  };

  return (
    <>
      <Modal
        modalContent={<ErrorModal setShowErrorModal={setShowErrorModal} />}
        modalState={showErrorModal}
        setModalState={() => setShowErrorModal(false)}
      />
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
                  <span>
                    {event.localisation?.address}, {event.localisation?.city}{' '}
                    {event.localisation?.zipCode}
                  </span>
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
              {canSubscribe && token && (
                <div className="absolute bottom-1 left-2 ">
                  <LabelButton
                    label={
                      alreadySubscribe
                        ? t('events.registered')
                        : t('events.register')
                    }
                    onClick={() => register()}
                    disabled={!!alreadySubscribe}
                    color={!!alreadySubscribe ? 'bg-green-500' : undefined}
                  />
                </div>
              )}
              {canWatch && token && (
                <Link to={`/live/${event.id}`}>
                  <div className="absolute bottom-1 left-2 ">
                    <LabelButton svg="eye" label={t('events.watch')} />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
