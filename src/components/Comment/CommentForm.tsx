import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../Authentication/Title';
import Stars from '../Stars/Stars';
import Label from '../utils/Label';

interface CommentFormProps {}

const CommentForm: React.FC<CommentFormProps> = () => {
  const { t } = useTranslation();
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const maxCharacters = 280;
  const postComment = async (event: any) => {
    event.preventDefault();
  };
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
            <Stars number={0} active={true} />
          </div>

          <div className="mb-4">
            <textarea
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
