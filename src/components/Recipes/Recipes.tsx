import React from 'react';
import Page from '../Page/Page';
import NavMenu from '../NavMenu/NavMenu';
import RecipeCard from './RecipeCard';
import { fakeRecipes } from '../../assets/FakeRecipes';
import SkeletonRecipes from '../utils/Skeleton/SkeletonRecipes';

const Recipes: React.FC = () => {
  const recipes = fakeRecipes;

  return (
    <Page>
      <NavMenu />
      {recipes.length === 0 ? (
        <SkeletonRecipes />
      ) : (
        <div className="grid grid-cols-5">
          <div className="col-start-2 col-end-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-2">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export default Recipes;
