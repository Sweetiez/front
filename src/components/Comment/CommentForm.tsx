import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../Authentication/Title';

interface CommentFormProps {}

const CommentForm: React.FC<CommentFormProps> = () => {
  const { t } = useTranslation();
  const postComment = async (event: any) => {
    event.preventDefault();
    console.log('Commentaire posté !');
  };
  return (
    <>
      <div className="px-8 md:px-20 pt-6 pb-8 mb-4 flex flex-col">
        <Title label={t('authentication.login.title')} />
        <form onSubmit={postComment}>
          <div className="mb-4">
            <textarea
              className="h-24 w-full border rounded-xl overflow-hidden resize-none focus:border-blue-500 ring-1 ring-transparent focus:ring-blue-500 focus:outline-none text-black p-2 transition ease-in-out duration-300"
              placeholder="Comment ! . . ."
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gold-100 hover:bg-blue-dark text-white font-bold py-2 px-12 rounded transform transition duration-200 hover:scale-105"
              type="submit"
            >
              {t('authentication.login.signIn')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
