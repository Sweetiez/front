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
        <>
          <div className="">
            <Carousel
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              swipeable={false}
              animationHandler={fadeAnimationHandler}
              interval={3000}
              className="md:h-80 h-40 w-full object-cover object-center"
            >
              {recipe?.images?.map((image: string, index: number) => (
                <div key={index}>
                  <img
                    className="md:h-80 h-40 object-cover object-center xs:object-contain"
                    src={image}
                    alt="recipe"
                  />
                  <p className="customLegend font-birthstone">
                    {recipe?.title}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="px-4 md:px-20">
            <div className="flex flex-col md:flex-row md:justify-center md:gap-12 gap-4 py-4">
              <div className="max-w-lg">
                <span className="font-birthstone flex justify-center text-4xl">
                  {t('recipes.description')}
                </span>
                <p>{recipe?.description}</p>
              </div>
              <div className="bg-white max-w-md rounded-2xl shadow mt-2">
                <div className="bg-gray-200 rounded-t-2xl">
                  <span className="flex justify-center pt-1">
                    {`${t('recipes.totalTime')} : ${
                      Number(
                        recipe?.preparationTime ? recipe.preparationTime : 0,
                      ) +
                      Number(recipe?.chillTime ? recipe.chillTime : 0) +
                      Number(recipe?.cookTime ? recipe.cookTime : 0)
                    } min`}
                  </span>
                  <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-1 text-left"
                                >
                                  {t('recipes.preparationTime')}
                                </th>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-1 text-left"
                                >
                                  {t('recipes.sleepTime')}
                                </th>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-1 text-left"
                                >
                                  {t('recipes.cookingTime')}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                                  {recipe?.preparationTime
                                    ? recipe.preparationTime
                                    : 0}{' '}
                                  min
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                                  {recipe?.chillTime ? recipe.chillTime : 0} min
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                                  {recipe?.cookTime ? recipe.cookTime : 0} min
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <Stars number={recipe?.rating ? recipe.rating : 2.5} />
                  <p className="font-pompiere text-xl">
                    {t('recipes.cost')} : {recipe?.cost ? recipe.cost : 0} €
                  </p>
                  <p className="font-pompiere text-xl">
                    {t('recipes.level')} :{' '}
                    <span className="capitalize">
                      {recipe?.difficulty
                        ? recipe.difficulty.toLowerCase()
                        : ''}
                    </span>
                  </p>
                  <p className="font-pompiere text-xl">
                    {t('recipes.portions')} :{' '}
                    {recipe?.people ? recipe.people : 0}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="font-birthstone flex justify-center text-4xl my-4">
                {t('recipes.steps')}
              </span>

              {recipe?.steps?.map((step: RecipeStep, index: number) => (
                <RecipeStepComponent step={step} key={index} />
              ))}
            </div>
          </div>
        </>
      )}
    </Page>
  );
};

export default RecipeDetail;
