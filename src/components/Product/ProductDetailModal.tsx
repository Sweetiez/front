import React from 'react';
import ProductCardModel from '../Shop/ProductCardModel';
import Stars from '../Stars/Stars';
import Lottie from 'react-lottie-player';
import cooking from '../../assets/cooking.json';
import CommentCard from '../Comment/CommentCard';
import {useTranslation} from "react-i18next";

interface ProductModalProps {
  manageAddClick: () => void;
  product: ProductCardModel;
}

const ProductDetailModal: React.FC<ProductModalProps> = ({
  manageAddClick,
  product,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="scroll-smooth hover:scroll-auto">
        <div className="max-w overflow-hidden">
          <img
            className="w-full h-56 object-cover object-center"
            src={product.image}
            alt="avatar"
          />
          <div
            className="flex grid grid-rows-0 grid-flow-col inline-block  justify-around items-center
                           px-6 py-1 bg-white shadow-sm"
          >
            <div className="ml-4 mb-4 flex lg:ml-0">
              <Lottie
                className="h-16 w-auto"
                loop
                animationData={cooking}
                play
              />
            </div>
            <h1 className="mx-3 font-semibold text-lg">{product.price}€</h1>
            <div className="flex flex-col-reverse justify-end mb-1 mr-4 group cursor-pointer">
              <Stars number={product.rating ? product.rating : 0} />
            </div>
          </div>
          <div className="py-4 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold text-gray-800 font-birthstone">
                {product.name}
              </h1>
            </div>
            <p className="py-2 pt-10 text-xl text-gray-700 font-pompiere font-size-16">
              {product.description}
            </p>
            <div className="flex justify-end">
              <button
                data-tip="test"
                data-for="test"
                className="mt-4 mr-4  bg-gold-100 items-center text-white font-bold text-xs px-2 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </button>
              <button
                className="grid grid-flow-col auto-cols-max r-0 mt-4 bg-gold-100 items-center text-white font-bold text-xs px-3 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => manageAddClick()}
              >
                <span className="text-xs content-center">
                  {t('productDetail.add')}
                </span>
                <svg
                  className="h-6 w-6 pl-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="3" y1="12" x2="6" y2="12" />
                  <line x1="12" y1="3" x2="12" y2="6" />
                  <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
                  <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
                  <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                  <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
              </button>
            </div>
            {product.comments!.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailModal;
