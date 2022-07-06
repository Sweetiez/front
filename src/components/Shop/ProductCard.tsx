import React, { useState } from 'react';
import ProductCardModel from './ProductCardModel';
import Stars from '../Stars/Stars';
import Lottie from 'react-lottie-player';
import cartAnimation from '../../assets/lotties/cart.json';
import ShowMoreText from 'react-show-more-text';
import getSvg from '../../assets/icons';

interface ProductCardProps {
  product: ProductCardModel;
  openProductDetailClick: (product: ProductCardModel) => void;
  openBasket: (product: ProductCardModel, state: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  openProductDetailClick,
  openBasket,
}) => {
  const [isCartHover, setIsCartHover] = useState(false);

  const showStars = product && product?.rating && product?.rating > 0;

  return (
    <>
      <div className="relative my-3 mx-3 lg:mx-5 flex flex-wrap justify-center">
        <div className="relative w-60 xl:w-64 min-w-full bg-white shadow-md rounded-2xl py-0 my-0 cursor-pointer border transform transition duration-500 hover:scale-110 ">
          <div className="overflow-x-hidden rounded-t-lg relative">
            {product.images && product.images[0] !== '' ? (
              <img
                className="h-40 w-full object-cover py-0"
                src={product.images ? product.images[0] : 'TODO Default'}
                alt="product-item"
                onClick={() => openProductDetailClick(product)}
              />
            ) : (
              <div className="h-40 w-full bg-gray-200 flex justify-center items-center">
                <div className="h-8 w-8 ">{getSvg('noImage')}</div>
              </div>
            )}

            <div
              onMouseEnter={() => setIsCartHover(true)}
              onMouseLeave={() => setIsCartHover(false)}
              className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
              onClick={() => {
                openBasket(product, true);
              }}
            >
              {/*// @ts-ignore*/}
              <Lottie
                className="h-8 w-auto"
                play={isCartHover}
                animationData={cartAnimation}
                loop={true}
              />
            </div>
          </div>
          <div className="p-3" onClick={() => openProductDetailClick(product)}>
            <div className="relative grid grid-cols-3 gap-4">
              <span className="text-2xl font-pompiere col-span-2 h-16">
                {product.name}
              </span>
              {product &&
              product?.unitPerPackage &&
              product.unitPerPackage > 1 ? (
                <div className="flex justify-end">
                  <span
                    className="font-pompiere inline-flex items-center justify-center px-3 py-2 text-xl font-bold
                              leading-none text-white bg-gold-100 rounded-full h-9 w-10"
                  >
                    x{product.unitPerPackage}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>

            <ShowMoreText
              lines={2}
              more=""
              less=""
              // anchorClass="text-gold-100 ml-1"
              className="text-lg font-pompiere w-full h-8 "
            >
              {product.description}
            </ShowMoreText>
            <div className="flex justify-between mt-8">
              <p className="text-md text-gray-800 mt-0">
                {parseFloat(
                  product.price ? product.price.toString() : '',
                ).toFixed(2)}{' '}
                €
              </p>
              {showStars ? (
                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                  <Stars
                    number={product && product?.rating ? product?.rating : 0}
                  />
                </div>
              ) : (
                <></>
              )}
              {/*<div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">*/}
              {/*  <Stars number={product.rating ? product.rating : 0} />*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
