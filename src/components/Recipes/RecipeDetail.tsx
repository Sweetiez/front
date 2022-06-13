import React from 'react';
import Page from '../Page/Page';
import NavMenu from '../NavMenu/NavMenu';
import { Carousel } from 'react-responsive-carousel';
import { fadeAnimationHandler } from '../../assets/animations/CarouselAnimation';
import { useParams } from 'react-router-dom';
import { useRecipeDetail } from '../../hooks/recipes/recipesHooks';
import Stars from '../Stars/Stars';
import { RecipeStep } from './models/RecipeModel';
import { useTranslation } from 'react-i18next';
import SkeletonRecipeDetail from '../utils/Skeleton/SkeletonRecipeDetail';

interface RecipeStepProps {
  step: RecipeStep | undefined;
}

const RecipeStepComponent: React.FC<RecipeStepProps> = ({ step }) => {
  return (
    <>
      <div className="flex col-start-1 col-end-4 border-b border-gray-200 mb-4">
        <div className=" w-1/6 text-center">
          <span className="mx-auto text-4xl font-birthstone text-gold-100">
            {step?.order}.
          </span>
        </div>
        <div className="w-5/6 font-pompiere text-2xl">{step?.description}</div>
      </div>
    </>
  );
};

const RecipeDetail: React.FC = () => {
  const { t } = useTranslation();
  let { id } = useParams();
  const { data: recipe } = useRecipeDetail(id ? id : '');

  return (
    <Page>
      <NavMenu />
      {!recipe ? (
        <SkeletonRecipeDetail />
      ) : (
        <div className="grid grid-cols-5">
          <div className="col-start-2 col-end-5">
            <div className="place-content-center h-auto mt-2">
              <h1 className="text-center font-birthstone text-4xl font-bold">
                {recipe?.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 pt-4">
              <div className="col-start-1 col-end-3">
                <Carousel
                  showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  swipeable={false}
                  animationHandler={fadeAnimationHandler}
                  interval={3000}
                  className="rounded-3xl overflow-hidden transform transition"
                >
                  {recipe?.images?.map((image: string, index: number) => (
                    <div key={index}>
                      <img
                        className="md:h-80 h-40 object-cover object-center xs:object-contain rounded-3xl"
                        src={image}
                        alt="recipe"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="mx-3 col-start-3 col-end-4">
                <table className="w-full table-fixed bg-gray-200 rounded mb-2">
                  <thead className="font-bold">
                    <tr>
                      <th colSpan={3}>
                        {`${t('recipes.totalTime')} : ${
                          Number(
                            recipe?.preparationTime
                              ? recipe.preparationTime
                              : 0,
                          ) +
                          Number(recipe?.chillTime ? recipe.chillTime : 0) +
                          Number(recipe?.cookTime ? recipe.cookTime : 0)
                        } min`}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="font-bold">
                      <td>{t('recipes.preparationTime')} </td>
                      <td>{t('recipes.sleepTime')}</td>
                      <td>{t('recipes.cookingTime')}</td>
                    </tr>
                    <tr>
                      <td>
                        {recipe?.preparationTime ? recipe.preparationTime : 0}{' '}
                        min
                      </td>
                      <td>{recipe?.chillTime ? recipe.chillTime : 0} min</td>
                      <td>{recipe?.cookTime ? recipe.cookTime : 0} min</td>
                    </tr>
                  </tbody>
                </table>
                <Stars number={recipe?.rating ? recipe.rating : 2.5} />
                <p>
                  {t('recipes.cost')} : {recipe?.cost ? recipe.cost : 0} €
                </p>
                <p>
                  {t('recipes.level')} :{' '}
                  {recipe?.difficulty ? recipe.difficulty : ''}
                </p>
                <p>
                  {t('recipes.portions')} : {recipe?.people ? recipe.people : 0}
                </p>
              </div>
              <div className="col-start-1 col-end-4 my-5">
                <span className="font-birthstone text-4xl">
                  {t('recipes.steps')}
                </span>
              </div>

              {recipe?.steps?.map((step: RecipeStep, index: number) => (
                <RecipeStepComponent step={step} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export default RecipeDetail;
