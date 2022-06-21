import { useQuery } from 'react-query';
import { commonRequest } from '../../common/request';
import ProductCardModel from '../../../components/Shop/ProductCardModel';
import SweetDetailModel from '../../../components/Product/SweetDetailModel';
import BannerModel from '../../../components/Shop/BannerModel';
import TrayDetailModel from '../../../components/Product/TrayDetailModel';

export function useStoreList(productType: string) {
  return useQuery<ProductCardModel[], Error>(
    `published-${productType}`,
    async () => {
      const { data } = await commonRequest({
        url: `${productType}/published`,
      });

      return data;
    },
  );
}

export function useProductDetails(id: string, type: string) {
  return useQuery<SweetDetailModel | TrayDetailModel, Error>(
    `${type}-${id}`,
    async () => {
      if (id && type) {
        const { data } = await commonRequest({
          url: `${type}/${id}`,
        });

        return data;
      }
    },
  );
}

export function useProductBanner() {
  return useQuery<BannerModel[], Error>(`banner`, async () => {
    const { data: sweets } = await commonRequest({
      url: `sweets/banner`,
    });

    const { data: trays } = await commonRequest({
      url: `trays/banner`,
    });

    return [...sweets, ...trays];
  });
}
