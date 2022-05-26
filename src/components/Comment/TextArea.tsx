import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Label from '../utils/Label';

const TextArea = () => {
  const { t } = useTranslation();
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const maxCharacters = 280;
  const handleCommentChange = (event: any) => {
    if (event.target.value.length <= maxCharacters) {
      setComment(event.target.value);
      setMessage('');
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
    </>
  );
};

export default TextArea;
