import React, { useCallback, useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import Stars from '../Stars/Stars';
import CommentCardModel from './CommentCardModel';
import { useTranslation } from 'react-i18next';
import Modal from '../utils/Modal';
import ReportForm from './ReportForm';

interface CommentCardModelProps {
  comment: CommentCardModel;
}

const CommentCard: React.FC<CommentCardModelProps> = ({ comment }) => {
  const { t } = useTranslation();
  const [ReportCommentModalState, setReportCommentModalState] = useState(false);
  const ReportCommentCloseClick = useCallback(() => {
    setReportCommentModalState(false);
  }, []);
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
              <span onClick={() => setReportCommentModalState(true)}>
                {t('comment.report.label')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        modalState={ReportCommentModalState}
        setModalState={ReportCommentCloseClick}
        modalContent={
          <ReportForm
            evaluationId={comment.id ? comment.id : ''}
            setModalState={ReportCommentCloseClick}
          />
        }
      />
    </>
  );
};

export default CommentCard;
