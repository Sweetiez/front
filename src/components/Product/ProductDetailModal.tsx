import React, {useCallback, useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Stars from '../Stars/Stars';
import Lottie from 'react-lottie-player';
import cooking from '../../assets/lotties/cooking.json';
import {useTranslation} from 'react-i18next';
import Stepper from '../Stepper/Stepper';
import {setCart, useCart} from '../../hooks/cart/cartHook';
import LabelButton from '../Button/LabelButton';
import {useProductDetails} from '../../hooks/products/sweets/sweetsHooks';
import CommentCard from '../Comment/CommentCard';
import Modal from '../utils/Modal';
import CommentForm from '../Comment/CommentForm';
import SkeletonProductDetail from '../utils/Skeleton/SkeletonProductDetail';
import {useTokenAvailable} from '../../hooks/auth/tokenHook';
import CommentType from '../Comment/CommentTypeEnum';
import {TRAYS} from "../FilterMenu/ProductType";

interface ProductModalProps {
  manageCloseClick: () => void;
  productId: string;
  productType: number;
}

const ProductDetailModal: React.FC<ProductModalProps> = ({ manageCloseClick, productId, productType }) => {
  const { data: productData } = useProductDetails(productId,  productType === TRAYS ? 'trays' : 'sweets');
  const { data: isTokenAvailable } = useTokenAvailable();
  const product = productData ? productData : undefined;
  const { t } = useTranslation();
  const [itemCount, setItemCount] = useState<string | undefined>('1');
  const [CommentModalState, setCommentModalState] = useState(false);
  const { data: cartData } = useCart();
  const cart = cartData ? cartData : [];

  const commentCloseClick = useCallback(() => {
    setCommentModalState(false);
  }, []);

  const manageAdd = () => {
    setCart([
      ...cart,
      {
        item: product,
        quantity: itemCount ? +itemCount : 1,
      },
    ]);
    manageCloseClick();
  };

  const showStars = product && product?.valuation && product?.valuation?.mark && product?.valuation?.mark > 0;
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
                <h1 className="mx-3 font-semibold text-lg">{product?.packagedPrice} €</h1>
                <span className="font-pompiere text-xs">({t('productPackage', {unit: product?.unitPerPackage, 'price': product?.price})})</span>
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
              </div>
              {showStars ? <div className="flex flex-col-reverse justify-end mb-1 mr-4 group cursor-pointer">
                <Stars number={product && product?.valuation && product?.valuation?.mark ? product?.valuation?.mark : 0} />
              </div> : <></> }

              <p className="py-2 pt-10 text-xl text-gray-700 font-pompiere font-size-16">
                {product?.description}
              </p>

              <div className="flex justify-end mt-4">
                {isTokenAvailable ? (
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
                  type={CommentType.SWEET}
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
