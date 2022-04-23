import { useQuery } from 'react-query';
import RecipeModel from '../../components/Recipes/RecipeModel';
import { fakeRecipes } from '../../assets/FakeRecipes';

export function useRecipeDetail(id: string) {
  return useQuery<RecipeModel | undefined, Error>(`recipe-${id}`, async () => {
    if (id) {
      return fakeRecipes.find((recipe) => recipe.id === id);
    }
  });
}
