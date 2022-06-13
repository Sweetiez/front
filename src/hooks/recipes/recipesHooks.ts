import { useQuery } from 'react-query';
import RecipeModel from '../../components/Recipes/models/RecipeModel';
import { SimpleRecipeModel } from '../../components/Recipes/models/SimpleRecipeModel';
import { commonRequest } from '../common/request';

export function useRecipes() {
  return useQuery<SimpleRecipeModel[], Error>(`all-recipes`, async () => {
    const { data } = await commonRequest({
      url: `recipes`,
    });

    return data;
  });
}

export function useRecipeDetail(id: string) {
  return useQuery<RecipeModel, Error>(`recipe-${id}`, async () => {
    if (id) {
      const { data } = await commonRequest({
        url: `recipes/${id}`,
      });

      return data;
    }
  });
}
