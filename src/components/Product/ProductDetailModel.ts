import EvaluationModel from './EvaluationModel';

export default class ProductDetailModel {
  id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  unitPerPackage: number | undefined;
  description: string | undefined;
  images: string[] | undefined;
  ingredients: string[] | undefined;
  diets: string[] | undefined;
  allergens: string[] | undefined;
  valuation: EvaluationModel | undefined;
}
