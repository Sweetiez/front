import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../Authentication/Title';
import Stars from '../Stars/Stars';
import Label from '../utils/Label';
import EvaluationsRequest from '../../hooks/evaluations/requests/evaluationsRequest';
import { createEvaluation } from '../../hooks/evaluations/evaluations';
import { useQueryClient } from 'react-query';
import CommentType from './CommentTypeEnum';

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
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const queryClient = useQueryClient();
  const maxCharacters = 280;
  const postComment = async (event: any) => {
    event.preventDefault();
    if (rating === 0) {
      setMessage(t('comment.form.error.rating'));
      setStatus('Error');
      return;
    }
    setMessage(t(''));
    setStatus('');

    const request = new EvaluationsRequest(
      '7e5ca0f1-a874-4807-aae1-7184b44d7046',
      subject,
      event.target.content.value,
      rating,
    );

    try {
      await createEvaluation(request);
      if (type === CommentType.SWEET)
        await queryClient.invalidateQueries(`sweets-${subject}`);
      if (type === CommentType.SWEET)
        await queryClient.invalidateQueries(`recipe-${subject}`);
      setModalState();
    } catch (e) {
      setMessage(t('comment.form.apiResponses.failure'));
      setStatus('Error');
    }
  };
  const handleStartClick = useCallback((rating) => {
    setRating(rating);
  }, []);
  const handleCommentChange = (event: any) => {
    if (event.target.value.length <= maxCharacters) {
      setComment(event.target.value);
      setMessage(t(''));
      setStatus('');
    } else {
      setMessage(
        t('comment.form.error.maxLength') +
          ' ' +
          maxCharacters +
          ' ' +
          t('comment.form.characters'),
      );
      setStatus('Error');
    }
  };
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <Title label={t('comment.form.title')} />
        <form onSubmit={postComment}>
          <div className="mb-2">
            <Stars number={rating} manageRating={handleStartClick} />
          </div>

          <div className="mb-4">
            <textarea
              id="content"
              className="h-32 w-full shadow appearance-none border-gray-400 placeholder-gray-400 rounded overflow-auto resize-none focus:ring-2 focus:ring-gold-100 focus:border-transparent focus:outline-none text-black p-2"
              placeholder={t('comment.form.placeholder')}
              value={comment}
              onChange={handleCommentChange}
            />
            <div className="flex justify-between text-gray-400 text-xs">
              <span>
                {maxCharacters} {t('comment.form.max')}
              </span>
              <span>
                {comment.length}{' '}
                {comment.length > 1
                  ? t('comment.form.characters')
                  : t('comment.form.character')}
              </span>
            </div>
          </div>
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
