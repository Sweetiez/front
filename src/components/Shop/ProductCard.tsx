import React, { useState } from 'react';
import ProductCardModel from './ProductCardModel';
import Stars from '../Stars/Stars';
import Lottie from 'react-lottie-player';
import cartAnimation from '../../assets/cart.json';
import ShowMoreText from 'react-show-more-text';

interface ProductCardProps {
  product: ProductCardModel;
  onImageClick: (product: ProductCardModel) => void;
  openBasket: (product: ProductCardModel, state: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onImageClick,
  openBasket,
}) => {
  const [isCartHover, setIsCartHover] = useState(false);

  return (
    <>
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <div className="relative w-60 lg:w-72 min-w-full bg-white shadow-md rounded-2xl px-3 py-2 mx-1 my-3 cursor-pointer border transform transition duration-500 hover:scale-110 ">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img
              className="h-40 rounded-2xl w-full object-cover"
              src={product.images ? product.images[0] : 'TODO Default'}
              alt="product-item"
              onClick={() => onImageClick(product)}
            />
            <div
              onMouseEnter={() => setIsCartHover(true)}
              onMouseLeave={() => setIsCartHover(false)}
              className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
              onClick={() => {
                openBasket(product, true);
              }}
            >
              <Lottie
                className="h-8 w-auto"
                play={isCartHover}
                animationData={cartAnimation}
                loop={true}
              />
            </div>
          </div>
          <div className="mt-4 pl-2 mb-2" onClick={() => onImageClick(product)}>
            <div>
              <p className="text-2xl font-pompiere">{product.name}</p>
              <ShowMoreText
                lines={2}
                more=""
                less=""
                // anchorClass="text-gold-100 ml-1"
                className="text-lg font-pompiere w-full h-8 min-h-full "
              >
                {product.description}
              </ShowMoreText>
              <div className="flex justify-between mt-8">
                <p className="text-md text-gray-800 mt-0">{product.price}€</p>
                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                  <Stars number={product.rating ? product.rating : 0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
