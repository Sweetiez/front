import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../utils/Title';
import Stars from '../Stars/Stars';
import Label from '../utils/Label';
import EvaluationsRequest from '../../hooks/evaluations/requests/evaluationsRequest';
import { createEvaluation } from '../../hooks/evaluations/evaluations';
import { useQueryClient } from 'react-query';
import CommentType from './CommentTypeEnum';
import TextArea from './TextArea';
import { useProfile } from '../../hooks/user/users';

interface CommentFormProps {
  type: CommentType;
  subject: string;
  setModalState: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  type,
  subject,
  setModalState,
}) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const profile = useProfile();
  const queryClient = useQueryClient();
  const postComment = async (event: any) => {
    event.preventDefault();
    if (rating === 0) {
      setMessage(t('comment.form.error.rating'));
      setStatus('Error');
      return;
    }
    setMessage('');
    setStatus('');

    const request = new EvaluationsRequest(
      profile?.customer_id,
      subject,
      event.target.content.value,
      rating,
    );

    try {
      await createEvaluation(request);
      if (type === CommentType.SWEET) {
        await queryClient.invalidateQueries(`sweets-${subject}`);
        await queryClient.invalidateQueries(`published-sweets`);
      }
      if (type === CommentType.TRAY) {
        await queryClient.invalidateQueries(`trays-${subject}`);
        await queryClient.invalidateQueries(`published-trays`);
      }
      if (type === CommentType.SWEET)
        await queryClient.invalidateQueries(`recipe-${subject}`);
      setModalState();
    } catch (e) {
      setMessage(t('comment.form.apiResponses.failure'));
      setStatus('Error');
    }
  };
  const handleStartClick = useCallback(
    (rating: ((prevState: number) => number) | number) => {
      setRating(rating);
    },
    [],
  );
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <Title label={t('comment.form.title')} />
        <form onSubmit={postComment}>
          <div className="mb-2">
            <Stars number={rating} manageRating={handleStartClick} />
          </div>
          <TextArea />
          <div className="flex justify-center mb-2">
            <Label status={status} message={message} />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
              type="submit"
            >
              {t('comment.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
