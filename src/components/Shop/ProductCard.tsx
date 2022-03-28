import React from 'react';
import ProductCardModel from './ProductCardModel';
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: ProductCardModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img
              className="h-40 rounded-2xl w-full object-cover"
              src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
              alt="product-item"
            />
            <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-50 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </p>
          </div>
          <div className="mt-4 pl-2 mb-2 flex justify-between ">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-0">
                {product.name}
              </p>

              <p className="text-md text-gray-800 mt-0">{product.price}€</p>
            </div>
            <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
              <Stars number={product.rating ? product.rating : 0} />
            </div>
          </div>
          <Link to={'/details/' + product.id}>
            <button
              className="grid grid-flow-col auto-cols-max bg-gold-100 items-center text-white active:bg-pink-600 font-bold text-xs px-3 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span className="text-xs content-center">Découvrir</span>
              <svg
                className="h-6 w-6 text-white pl-1"
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
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
