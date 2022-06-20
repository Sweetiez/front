import { useQuery } from 'react-query';
import { commonRequest } from '../../common/request';
import ProductCardModel from '../../../components/Shop/ProductCardModel';
import SweetDetailModel from '../../../components/Product/SweetDetailModel';
import BannerModel from '../../../components/Shop/BannerModel';

export function useStoreList() {
  return useQuery<ProductCardModel[], Error>(`published-trays`, async () => {
    const { data } = await commonRequest({
      url: `trays/published`,
    });

    return data;
  });
}

export function useTrayDetails(id: string) {
  return useQuery<SweetDetailModel, Error>(`trays-${id}`, async () => {
    if (id) {
      const { data } = await commonRequest({
        url: `trays/${id}`,
      });

      return data;
    }
  });
}

export function useTrayBanner() {
  return useQuery<BannerModel[], Error>(`banner`, async () => {
    const { data } = await commonRequest({
      url: `trays/banner`,
    });
    return data;
  });
}
