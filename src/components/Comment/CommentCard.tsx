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
      <div className="bg-white max-w rounded-2xl px-6 py-2 mt-2 shadow-lg transition duration-500">
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
          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-2">
              <div className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                  alt=""
                />
              </div>
              <div className="text-xs font-semibold">
                {comment.author} •{' '}
                <span className="font-normal"> {comment.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
