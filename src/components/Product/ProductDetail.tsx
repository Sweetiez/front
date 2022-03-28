import React from 'react';
import Page from './../Page/Page';
import { useParams } from 'react-router-dom';
import { fakeProducts } from '../../assets/FakeProducts';
import '../../assets/css/product-details.css';

const ProductDetail: React.FC = () => {
  let { id } = useParams();

  const currentProduct = fakeProducts.find((item) => item.id === id);

  if (!currentProduct) {
    return <>Product not found</>;
  }

  return (
    <Page>
      <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0" />
            <div className="w-full md:w-1/2 px-10 py-20 border-2 border-gold-100 absolute top-10 bottom-10 left-10 right-10 z-0 bg-beige-100">
              <div className="border border-gold-100 absolute top-2 bottom-2 left-2 right-2 z-0">
                <div className="corner border-tl" />
                <div className="corner border-tr" />
                <div className="corner border-br" />
                <div className="corner border-bl" />
              </div>
              <div className="corner-2 border-tl-2" />
              <div className="corner-2 border-tr-2" />
              <div className="corner-2 border-br-2" />
              <div className="corner-2 border-bl-2" />
              <div className="grid text-center">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {currentProduct.name}
                  </h1>
                  <p className="text-sm">{currentProduct.description}</p>
                </div>
                <div className="absolute bottom-10">
                  <div className="inline-block align-bottom mr-5">
                    {/*<span className="text-2xl leading-none align-baseline">$</span>*/}
                    <span className="font-bold text-5xl leading-none align-baseline">
                      {currentProduct.price}
                    </span>
                    <span className="text-2xl leading-none align-baseline">
                      €
                    </span>
                  </div>
                  <div className="inline-block align-bottom">
                    <button className="grid grid-flow-col auto-cols-max items-center bg-gold-100 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                      Ajouter au panier
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 group-hover:opacity-50 opacity-70 yellow-900 pl-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="rgb(113 63 18)"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-20">
              <div className="relative">
                <img
                  src={currentProduct.image}
                  className="w-full relative z-10 rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default ProductDetail;
