import React from 'react';
import Stars from '../Stars/Stars';
import CommentCardModel from './CommentCardModel';

interface CommentCardModelProps {
  comment: CommentCardModel;
}

const CommentCard: React.FC<CommentCardModelProps> = ({ comment }) => {
  return (
    <>
      <div className="bg-white max-w rounded-2xl px-6 py-4 mt-4 shadow-lg transition duration-500">
        <div className="mt-4">
          <div className="flex flex-col-reverse justify-end mb-1 mr-4 group cursor-pointer">
            <Stars number={comment.rating ? comment.rating : 0} />
          </div>
          <p className="mt-4 text-md text-gray-600">{comment.content}</p>
          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-2">
              <div className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold">
                {comment.author} •{' '}
                <span className="font-normal"> 5 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
