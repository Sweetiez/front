import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleRecipeModel } from './models/SimpleRecipeModel';
import ShowMoreText from "react-show-more-text";

interface RecipeCardProps {
  recipe: SimpleRecipeModel;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <>
      <div className="relative  my-3 mx-3 lg:mx-5  flex flex-wrap justify-center">
        <div className="relative w-60 xl:w-64 h-80 min-w-full bg-white shadow-md rounded-2xl py-0 my-0 cursor-pointer border transform transition duration-500 hover:scale-110 ">
          <Link to={'/recipes/' + recipe.id}>
            <div className="overflow-x-hidden rounded-t-lg relative">
              <img
                className="h-40 w-full object-cover py-0"
                src={recipe.images ? recipe.images[0] : ''}
                alt="recipe_image"
              />
            </div>
            <div className="p-3">
              <div className="relative">
              <span className="text-2xl font-pompiere">
                {recipe.name}
              </span>
              <ShowMoreText
                  lines={3}
                  more=""
                  less=""
                  // anchorClass="text-gold-100 ml-1"
                  className="text-lg font-pompiere w-full h-8 min-h-full "
              >
                {recipe.description}
              </ShowMoreText>
              {/*<p className="font-normal text-gray-700 mb-3">*/}
              {/*  {recipe.description}*/}
              {/*</p>*/}
              </div>
            </div>
            {/*<div className="absolute bottom-0 right-0 p-5">*/}
            {/*  /!*<Stars number={recipe.rating ? recipe.rating : 0} />*!/*/}
            {/*</div>*/}
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
