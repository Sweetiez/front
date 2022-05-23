import { useQuery } from 'react-query';
import { commonRequest } from '../../utils/request';
import ProductCardModel from '../../../components/Shop/ProductCardModel';
import ProductDetailModel from '../../../components/Product/ProductDetailModel';
import BannerModel from "../../../components/Shop/BannerModel";

export function useStoreList() {
  return useQuery<ProductCardModel[], Error>(`published-sweets`, async () => {
    const { data } = await commonRequest({
      url: `sweets/published`,
    });

    return data;
  });
}

export function useSweetDetails(id: string) {
  return useQuery<ProductDetailModel, Error>(`sweets-${id}`, async () => {
    if (id) {
      const { data } = await commonRequest({
        url: `sweets/${id}`,
      });

      return data;
    }
  });
}

export function useSweetBanner() {
  return useQuery<BannerModel[], Error>(`banner`, async () => {
      const { data } = await commonRequest({
        url: `sweets/banner`,
      });
      return data;
  });
}
