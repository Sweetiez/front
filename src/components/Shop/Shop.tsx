import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ProductCard from './ProductCard';
import ProductDetailModal from '../Product/ProductDetailModal';
import QuickShop from './QuickShop';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../assets/css/_carousel.css';
import {
  useProductBanner,
  useStoreList,
} from '../../hooks/products/sweets/sweetsHooks';
import { fakeProducts } from '../../assets/FakeProducts';
import SkeletonShop from '../utils/Skeleton/SkeletonShop';
import BannerModel from './BannerModel';
import FilterMenu from '../FilterMenu/FilterMenu';
import { useTranslation } from 'react-i18next';
import ProductCardModel from './ProductCardModel';
import { SWEET_INDEX, TRAY_INDEX } from '../Product/ProductType';

export interface FilterType {
  ratings?: number[];
  price?: number[];
  category?: string[];
  allergen?: string[];
}

const Shop: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(fakeProducts[0]); // default value?
  const [modalState, setModalState] = useState(false);
  const [filters, setFilters] = useState<FilterType>({});
  const { data: sweetData, isLoading: isSweetLoading } = useStoreList('sweets');
  const { data: trayData, isLoading: isTrayLoading } = useStoreList('trays');
  const [productType, setProductType] = useState(TRAY_INDEX);
  const dataManager = useCallback((productType) => {
    setProductType(productType);
  }, []);

  const { data: bannerData } = useProductBanner();
  const minRating = 0;
  const maxRating = 5;
  const minPrice = 0;
  const maxPrice = 200;

  const products = useMemo(() => {
    const data = productType === SWEET_INDEX ? sweetData : trayData;
    if (!data) return [];
    let newData = [...data];

    if (filters.ratings) {
      if (
        minRating === filters.ratings[0] &&
        maxRating === filters.ratings[1]
      ) {
        delete filters.ratings;
      } else {
        newData = newData.filter((product) => {
          return !!(
            product.rating &&
            filters.ratings &&
            product.rating >= filters.ratings[0] &&
            product.rating <= filters.ratings[1]
          );
        });
      }
    }
    if (filters.price) {
      if (minPrice === filters.price[0] && maxPrice === filters.price[1]) {
        delete filters.price;
      } else {
        newData = newData.filter((product) => {
          return !!(
            product.price &&
            filters.price &&
            product.price >= filters.price[0] &&
            product.price <= filters.price[1]
          );
        });
      }
    }
    if (filters.category && filters.category.length > 0) {
      newData = newData.filter((product) => {
        return !!(
          product.flavor &&
          filters.category &&
          filters.category.includes(product.flavor)
        );
      });
    } else {
      delete filters.category;
    }
    return newData;
  }, [filters, sweetData, trayData, productType]);

  const manageBasketClick = useCallback((product, state) => {
    setCurrentProduct(product);
    setModalState(state);
  }, []);

  const manageProductDetailClick = useCallback(
    (product: ProductCardModel | BannerModel) => {
      if (product as BannerModel) {
        if (sweetData && trayData) {
          const sweetIds = sweetData.map((item) => item.id);
          const products = sweetIds.includes(product.id) ? sweetData : trayData;
          const optionalProduct = products.find((p) => p.id === product.id);

          product = optionalProduct ? optionalProduct : fakeProducts[0];
        }
      }
      setOpen(true);
      setCurrentProduct(product as ProductCardModel);
    },
    [sweetData, trayData],
  );

  const manageCloseClick = useCallback(() => {
    setOpen(false);
  }, []);

  if (productType === SWEET_INDEX ? isSweetLoading : isTrayLoading)
    return <SkeletonShop />;

  return (
    <>
      <div>
        {bannerData?.length === 1 ? (
          <img
            key="carousel"
            className="md:h-80 h-40 w-full object-cover object-center"
            src={bannerData[0]?.images}
            alt="avatar"
            onClick={() => manageProductDetailClick(bannerData[0])}
          />
        ) : (
          <>
            {bannerData && (
              <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                animationHandler="fade"
                swipeable={false}
                interval={3000}
                onClickItem={(index) =>
                  manageProductDetailClick(bannerData[index])
                }
              >
                {bannerData?.map((bannerModel: BannerModel, index: number) => (
                  <div key={index}>
                    <img
                      className="md:h-80 h-40 object-cover object-center xs:object-contain"
                      src={bannerModel.images}
                      alt="avatar"
                    />
                    <p className="customLegend font-birthstone">
                      {bannerModel.name}
                    </p>
                  </div>
                ))}
              </Carousel>
            )}
          </>
        )}
      </div>

      <div>
        <FilterMenu
          setFilters={setFilters}
          filters={filters}
          dataManager={dataManager}
          productType={productType}
        />
      </div>
      <div className="flex justify-center">
        {products.length === 0 ? (
          <div className="flex justify-center">
            <span className="font-pompiere text-3xl p-40">
              {t('filters.filtersMenu.noResults')}
            </span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-5 pt-6">
              <div className="col-start-1 col-end-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-rows-2">
                  {' '}
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      openProductDetailClick={manageProductDetailClick}
                      openBasket={manageBasketClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/*Modal Cart*/}
        <Transition.Root show={modalState} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={setModalState}
          >
            <div className="flex items-end justify-center min-h-screen w-fit pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <QuickShop
                    product={currentProduct}
                    setOpenedModal={setModalState}
                  />
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/*Modal Sidebar left*/}
        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pl-10">
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="z-40 fixed inset-0 overflow-hidden"
              onClose={setOpen}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterTo="translate-x-0"
                    enterFrom="-translate-x-full"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveTo="-translate-x-full"
                    leaveFrom="translate-x-0"
                  >
                    <div className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl ">
                        <ProductDetailModal
                          manageCloseClick={manageCloseClick}
                          productId={currentProduct.id ? currentProduct.id : ''}
                          productType={
                            currentProduct.type ? currentProduct.type : ''
                          }
                        />
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </>
  );
};

export default Shop;
