import EvaluationModel from './EvaluationModel';
import { SweetWithQuantity } from './SweetWithQuantity';

export default class TrayDetailModel {
  id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  unitPerPackage: number | undefined;
  packagedPrice: number | undefined;
  description: string | undefined;
  images: string[] | undefined;
  sweets: SweetWithQuantity[] | undefined;
  diets: string[] | undefined;
  allergens: string[] | undefined;
  valuation: EvaluationModel | undefined;
}
