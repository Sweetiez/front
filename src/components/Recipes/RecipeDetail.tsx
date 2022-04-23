import React from 'react';
import Page from '../Page/Page';
import NavMenu from '../NavMenu/NavMenu';
import { Carousel } from 'react-responsive-carousel';
import { fadeAnimationHandler } from '../../assets/animations/CarouselAnimation';
import { useParams } from 'react-router-dom';
import { useRecipeDetail } from '../../hooks/recipes/recipesHooks';
import Stars from '../Stars/Stars';
import { RecipeStep } from './RecipeModel';

interface RecipeStepProps {
  step: RecipeStep | undefined;
}

const RecipeStepComponent: React.FC<RecipeStepProps> = ({ step }) => {
  return (
    <>
      <div className="flex col-start-1 col-end-4 border-b border-gray-200 mb-4">
        <div className=" w-1/6 text-center">
          <span className="mx-auto text-4xl font-birthstone text-gold-100">
            {step?.number}.
          </span>
        </div>
        <div className="w-5/6 font-pompiere text-2xl">{step?.description}</div>
      </div>
    </>
  );
};

const RecipeDetail: React.FC = () => {
  let { id } = useParams();
  const { data: recipe } = useRecipeDetail(id ? id : '');

  return (
    <Page>
      <NavMenu />
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-end-5">
          <div className="place-content-center h-auto mt-2">
            <h1 className="text-center font-birthstone text-4xl font-bold">
              {recipe?.name}
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
                  {`Temps total : ${
                    recipe?.totalTime ? recipe.totalTime : 0
                  } min`}
                </thead>
                <tbody>
                  <tr className="font-bold">
                    <td>Préparation</td>
                    <td>Repos</td>
                    <td>Cuisson</td>
                  </tr>
                  <tr>
                    <td>
                      {recipe?.preparationTime ? recipe.preparationTime : 0} min
                    </td>
                    <td>{recipe?.sleepTime ? recipe.sleepTime : 0} min</td>
                    <td>{recipe?.cookingTime ? recipe.cookingTime : 0} min</td>
                  </tr>
                </tbody>
              </table>
              <Stars number={recipe?.rating ? recipe.rating : 2.5} />
              <p>Coût : {recipe?.cost ? recipe.cost : 0} €</p>
              <p>Niveau : {recipe?.level ? recipe.level : ''}</p>
              <p>Personnes : {recipe?.portions ? recipe.portions : 0}</p>
            </div>
            <div className="col-start-1 col-end-4 my-5">
              <span className="font-birthstone text-4xl">Préparation</span>
            </div>

            {recipe?.steps?.map((step: RecipeStep, index: number) => (
              <RecipeStepComponent step={step} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default RecipeDetail;
