import React from 'react';
import ProductCard from './ProductCard';

const Shop: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-end-6">
          <div className="grid grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Shop;
