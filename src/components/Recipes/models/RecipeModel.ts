export default class RecipeModel {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  images: string[] | undefined;
  rating: number | undefined;
  totalTime: string | undefined;
  preparationTime: string | undefined;
  chillTime: string | undefined;
  cookTime: string | undefined;
  people: number | undefined;
  cost: number | undefined;
  difficulty: string | undefined;
  steps: RecipeStep[] | undefined;
}

export class RecipeStep {
  id: string | undefined;
  order: number | undefined;
  description: string | undefined;
}
