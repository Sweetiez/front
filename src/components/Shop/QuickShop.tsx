import React from 'react';
import ProductCardModel from './ProductCardModel';

interface QuickShopProps {
  product: ProductCardModel;
  setOpenedModal: (openedModal: boolean) => void;
}

const QuickShop: React.FC<QuickShopProps> = ({ product, setOpenedModal }) => {
  const [itemCount, setItemCount] = React.useState<string | undefined>('1');
  const unitPrice = product.price ? product.price : 9999999999;

  function verifyInput() {
    return !itemCount || isNaN(+itemCount) || +itemCount <= 0 ? '1' : itemCount;
  }

  function handlePlus() {
    setItemCount((+verifyInput() + 1).toString());
  }

  function handleMinus() {
    setItemCount(
      itemCount && +itemCount <= 1 ? '1' : (+verifyInput() - 1).toString(),
    );
  }

  return (
    <>
      {/*// <!-- CONTAINER MODAL-->*/}
      <div className="flex items-center justify-center">
        {/*// <!--MODAL ITEM-->*/}
        <div className="w-auto mx-4 p-4 rounded-xl ">
          {/*// <!--MODAL HEADER-->*/}
          <div className="flex justify-between items center border-b border-gray-200 py-3">
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-gray-800">Panier rapide</p>
            </div>
            <div
              onClick={() => {
                setOpenedModal(false);
              }}
              className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            >
              x
            </div>
          </div>

          {/*// <!--MODAL BODY-->*/}
          <div className="grid grid-cols-3">
            <div className="rounded-full pt-3">
              <img
                className="h-40 rounded-2xl w-full object-cover"
                src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                alt="product-item"
              />
            </div>
            <div className="ml-2 col-start-2 col-end-4 w-fit h-fit">
              <p className="text-xl font-bold text-gray-800">{product.name}</p>
              <p className="text-xl font-bold text-gray-800">{unitPrice} €</p>
              {/* Stepper */}
              <div className="pb-3 h-fit w-fit">
                <label className="w-full text-gray-700 text-sm font-semibold">
                  Counter Input
                </label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    onClick={handleMinus}
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    value={itemCount ?? ''}
                    onChange={(e) =>
                      setItemCount(
                        e.target.value
                          .trim()
                          .match(/[\d,.]+/g)?.[0]
                          .replace(',', '.'),
                      )
                    }
                    onBlur={() => setItemCount(verifyInput)}
                  />

                  <button
                    onClick={handlePlus}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>

              <button className=" bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
                Ajouter au panier pour{' '}
                {+(itemCount ? itemCount : 1) * unitPrice} €
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickShop;
