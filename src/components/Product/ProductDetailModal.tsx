import React, {useCallback, useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Stars from '../Stars/Stars';
import Lottie from 'react-lottie-player';
import cooking from '../../assets/lotties/cooking.json';
import { useTranslation } from 'react-i18next';
import Stepper from '../Stepper/Stepper';
import { setCart, useCart } from '../../hooks/cart/cartHook';
import LabelButton from '../Button/LabelButton';
import { useProductDetails } from '../../hooks/products/sweets/sweetsHooks';
import CommentCard from '../Comment/CommentCard';
import Modal from '../utils/Modal';
import CommentForm from '../Comment/CommentForm';
import SkeletonProductDetail from '../utils/Skeleton/SkeletonProductDetail';
import { useTokenAvailable } from '../../hooks/auth/tokenHook';
import CommentType from '../Comment/CommentTypeEnum';
import { SWEET_TYPE, TRAY_TYPE } from './ProductType';
import SweetDetailModel from './SweetDetailModel';
import TrayDetailModel from './TrayDetailModel';
import ShowMoreText from 'react-show-more-text';
import VerifyPurchaseRequest from "../../hooks/orders/requests/VerifyPurchaseRequest";
import {verifyPurchase} from "../../hooks/orders/orders";
import {useProfile} from "../../hooks/user/users";

interface ProductModalProps {
  manageCloseClick: () => void;
  productId: string;
  productType: string;
}

const ProductDetailModal: React.FC<ProductModalProps> = ({
  manageCloseClick,
  productId,
  productType,
}) => {
  const { data: productData } = useProductDetails(
    productId,
    productType === TRAY_TYPE ? 'trays' : 'sweets',
  );
  const { data: isTokenAvailable } = useTokenAvailable();
  const product = productData ? productData : undefined;
  const { t } = useTranslation();
  const [itemCount, setItemCount] = useState<string | undefined>('1');
  const [isPurchase, setIsPurchase] = useState<boolean>(false);
  const [CommentModalState, setCommentModalState] = useState(false);
  const { data: cartData } = useCart();
  const cart = cartData ? cartData : [];
  const profile = useProfile();


  useEffect(() => {
    if(isTokenAvailable) {
      const request = new VerifyPurchaseRequest(
          profile?.email || '',
          productId
      );
      verifyPurchase(request).then(data => {
        setIsPurchase(data.isPurchaseProduct)
      });
    }

  }, [isTokenAvailable, productId, profile?.email]);



  const commentCloseClick = useCallback(() => {
    setCommentModalState(false);
  }, []);

  const manageAdd = () => {
    const item = cart.find((it) => it.item?.id === product?.id);

    if (item && item.quantity) {
      item.quantity += itemCount ? +itemCount : 1;
    } else {
      cart.push({
        item: product,
        type: productType === 'trays' ? 'TRAY' : 'SWEET',
        quantity: itemCount ? +itemCount : 1,
      });
    }

    setCart(cart);
    manageCloseClick();
  };

  const showStars =
    product &&
    product?.valuation &&
    product?.valuation?.mark &&
    product?.valuation?.mark > 0;
  return (
    <>
      {!product ? (
        <SkeletonProductDetail />
      ) : (
        <div className="scroll-smooth hover:scroll-auto">
          <div className="max-w overflow-hidden">
            {product?.images?.length === 1 ? (
              <img
                key={'image'}
                className="w-full h-56 object-cover object-center"
                src={product?.images[0]}
                alt="avatar"
              />
            ) : (
              <>
                {product?.images && (
                  <Carousel showThumbs={false} showStatus={false}>
                    {product?.images.map((image: string, index: number) => (
                      <div key={index}>
                        <img
                          className="w-full h-56 object-cover object-center"
                          src={image}
                          alt="avatar"
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
              </>
            )}

            <div className="flex justify-around items-center px-6 py-1 bg-white shadow-sm">
              <div className="ml-4 mb-4 flex lg:ml-0">
                {/*// @ts-ignore*/}
                <Lottie
                  className="h-16 w-auto"
                  loop
                  animationData={cooking}
                  play
                />
              </div>
              <div>
                <h1 className="mx-3 font-semibold text-lg">
                  {product.packagedPrice
                    ? product.packagedPrice
                    : product.price
                    ? product.price
                    : 1}
                  €
                </h1>
                {(product as SweetDetailModel).ingredients ? (
                  <span className="font-pompiere text-xs">
                    (
                    {t('productPackage', {
                      unit: product?.unitPerPackage,
                      price: product?.price,
                    })}
                    )
                  </span>
                ) : (
                  <></>
                )}
              </div>
              {/* Stepper */}
              <div className="flex justify-center ">
                <Stepper itemCount={itemCount} setItemCount={setItemCount} />
                <LabelButton
                  label={t('productDetail.add')}
                  svg="add"
                  onClick={manageAdd}
                />
              </div>
            </div>
            <div className="py-4 px-6">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold text-gray-800 font-birthstone">
                  {product?.name}
                </h1>
                {showStars ? (
                  <div className="flex pt-2 flex-col-reverse justify-end mb-1 mr-4 group cursor-pointer">
                    <Stars
                      number={
                        product &&
                        product?.valuation &&
                        product?.valuation?.mark
                          ? product?.valuation?.mark
                          : 0
                      }
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="py-2 pt-6 text-xl text-gray-700 font-pompiere font-size-16">
                <ShowMoreText
                  lines={5}
                  more={t('comment.showMore')}
                  less=""
                  anchorClass="text-gold-100 ml-1"
                >
                  {product.description}
                </ShowMoreText>
              </div>

              {productType === SWEET_TYPE ? (
                <div>
                  <h1 className="text-3xl pt-2 font-bold text-gray-800 font-birthstone">
                    {t('productDetail.ingredients')}
                  </h1>
                  <p className="py-2 pt-2 text-xl text-gray-700 font-pompiere font-size-16">
                    {(product as SweetDetailModel).ingredients?.join(', ')}
                  </p>
                </div>
              ) : (
                <></>
              )}

              {productType === TRAY_TYPE ? (
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 font-birthstone">
                    {t('productDetail.sweets')}
                  </h1>
                  <div className="pr-8 pb-2">
                    {(product as TrayDetailModel).sweets?.map((sweetQty) => (
                      <div className="flex justify-between text-xl text-gray-700 font-pompiere font-size-16" key={sweetQty.sweet?.id}>
                        <span>{sweetQty.sweet?.name}</span>
                        <span>× {sweetQty.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div>
                <h1 className="text-3xl pt-2 font-bold text-gray-800 font-birthstone">
                  {t('productDetail.diets')}
                </h1>
                <p className="py-2 pt-2 text-xl text-gray-700 font-pompiere font-size-16">
                  {(product as SweetDetailModel).diets
                    ?.map(
                      (allergen) =>
                        allergen[0].toUpperCase() +
                        allergen.substring(1).toLowerCase(),
                    )
                    ?.join(', ')}
                </p>
              </div>

              <div>
                <h1 className="text-3xl pt-2 font-bold text-gray-800 font-birthstone">
                  {t('productDetail.allergens')}
                </h1>
                <p className="py-2 pt-2 text-xl text-gray-700 font-pompiere font-size-16">
                  {(product as SweetDetailModel).allergens
                    ?.map(
                      (allergen) =>
                        allergen[0].toUpperCase() +
                        allergen.substring(1).toLowerCase(),
                    )
                    ?.join(', ')}
                </p>
              </div>

              <div className="flex justify-end mt-4">
                {isTokenAvailable && isPurchase ? (
                  <LabelButton
                    svg="pen"
                    label={t('productDetail.comment')}
                    onClick={() => setCommentModalState(true)}
                  />
                ) : (
                  <></>
                )}
              </div>
              {product?.valuation?.comments?.map((comment) =>
                comment.content !== '' ? (
                  <CommentCard key={comment.id} comment={comment} />
                ) : (
                  ''
                ),
              )}
            </div>
            <Modal
              modalState={CommentModalState}
              setModalState={commentCloseClick}
              modalContent={
                <CommentForm
                  subject={productId}
                  setModalState={commentCloseClick}
                  type={
                    productType === SWEET_TYPE
                      ? CommentType.SWEET
                      : CommentType.TRAY
                  }
                />
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailModal;
