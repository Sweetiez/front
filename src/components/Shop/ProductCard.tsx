import React, { useState } from 'react';
import ProductCardModel from './ProductCardModel';
import Stars from '../Stars/Stars';
import Lottie from 'react-lottie-player';
import cartAnimation from '../../assets/cart.json';

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
        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-2xl p-2 mx-1 my-3 cursor-pointer border">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img
              className="h-40 rounded-2xl w-full object-cover"
              src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
              alt="product-item"
              onClick={() => onImageClick(product)}
            />
            <div
              onMouseEnter={() => setIsCartHover(true)}
              onMouseLeave={() => setIsCartHover(false)}
              onClick={() => {
                console.log('test');
                openBasket(product, true);
              }}
              className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group"
            >
              <Lottie
                className="h-8 w-auto"
                play={isCartHover}
                animationData={cartAnimation}
                loop={true}
              />
            </div>
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
        </div>
      </div>
    </>
  );
};

export default ProductCard;
