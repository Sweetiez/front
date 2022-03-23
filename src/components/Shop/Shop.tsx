import React from 'react';
import ProductCard from './ProductCard';
import { fakeProducts } from '../../assets/FakeProducts';

const Shop: React.FC = () => {
  const products = fakeProducts;

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-end-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default Shop;
