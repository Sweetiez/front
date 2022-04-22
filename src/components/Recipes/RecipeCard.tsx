import React from 'react';
import { Link } from 'react-router-dom';
import RecipeModel from './RecipeModel';

interface RecipeCardProps {
  recipe: RecipeModel;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <>
      <div className="relative my-5 mx-5 flex flex-wrap justify-center">
        <div className="relative min-w-full shadow-md rounded-2xl py-0 my-0 cursor-pointer transform transition duration-500 hover:scale-110 ">
          <Link to="">
            <img
              className="rounded-t-lg"
              src={recipe.image}
              alt="recipe_image"
            />

            <div className="p-5">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {recipe.name}
              </h5>
              <p className="font-normal text-gray-700 mb-3">
                {recipe.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
