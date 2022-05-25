import React from 'react';
import ShowMoreText from 'react-show-more-text';
import Stars from '../Stars/Stars';
import CommentCardModel from './CommentCardModel';
import { useTranslation } from 'react-i18next';

interface CommentCardModelProps {
  comment: CommentCardModel;
}

const CommentCard: React.FC<CommentCardModelProps> = ({ comment }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white max-w rounded-2xl px-6 py-2 mt-2 shadow-lg transition duration-500 transform transition duration-200 hover:scale-105">
        <div className="mt-4">
          <div className="flex flex-col-reverse justify-end mb-1 mr-4 group cursor-pointer">
            <Stars number={comment.rating ? comment.rating : 0} />
          </div>
          <ShowMoreText
            lines={5}
            more={t('comment.showMore')}
            less=""
            anchorClass="text-gold-100 ml-1"
          >
            {comment.content}
          </ShowMoreText>
          <div className="mt-4 flex justify-between items-center space-x-4 py-2">
            <div className="font-semibold">
              {comment.author} •{' '}
              <span className="font-normal">{comment.date}</span>
            </div>
            <div className="flex justify-end text-xs transform transition duration-200 hover:text-gold-100">
              <span>{t('comment.report')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
