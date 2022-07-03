import React, {useEffect} from 'react';
import Page from '../Page/Page';
import NavMenu from '../NavMenu/NavMenu';
import SkeletonRecipes from '../utils/Skeleton/SkeletonRecipes';
import {
  useFaceToFaceEvents,
  useStreamingEvents,
} from '../../hooks/events/events';
import EventCard from './EventCard';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import i18next from "i18next";
import * as moment from "moment";
import 'moment/min/locales';


const Events: React.FC = () => {
  const locale =  i18next.language

  useEffect(() => {
    if(locale){
      moment.locale(locale.split('-')[0]);

    }
  }, [locale])

  const { t } = useTranslation();
  const { data: faceToFaceEvents, isLoading: faceToFaceEventsLoading } =
    useFaceToFaceEvents();
  const { data: streamingEvents, isLoading: streamingEventsLoading } =
    useStreamingEvents();

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Page>
      <NavMenu />
      {faceToFaceEventsLoading || streamingEventsLoading ? (
        <SkeletonRecipes />
      ) : (
        <>
          <div className="mt-12">
            <div className="font-dark font-bold align font-birthstone text-5xl flex justify-center pb-1">
              {t('events.faceToFace.title')}
            </div>
            {faceToFaceEvents && faceToFaceEvents.length >= 1 ? (
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
              >
                {faceToFaceEvents?.map((faceToFaceEvent, index) => (
                  <EventCard key={index} event={faceToFaceEvent} type="FACE_TO_FACE" />
                ))}
              </Carousel>
            ) : (
              <div className="flex justify-center">
                <span className="font-pompiere text-3xl p-24">
                  {t('events.faceToFace.noResult')}
                </span>
              </div>
            )}
          </div>

          <div className="py-8">
            <div className="font-dark font-bold align font-birthstone text-5xl flex justify-center pb-1 pt-8">
              {t('events.streaming.title')}
            </div>
            {streamingEvents && streamingEvents.length >= 1 ? (
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
              >
                {streamingEvents?.map((streamingEvent, index) => (
                  <EventCard key={index} event={streamingEvent} type="EVENT"  />
                ))}
              </Carousel>
            ) : (
              <div className="flex justify-center">
                <span className="font-pompiere text-3xl p-24">
                  {t('events.streaming.noResult')}
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </Page>
  );
};

export default Events;
