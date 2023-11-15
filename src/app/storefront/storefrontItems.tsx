import React, { useState, useEffect } from 'react';

import { StorefrontWrapper } from './styles';

import IndividualItem from './IndividualItem';

import { Product } from '../../schema/schema';

import { arrayOfFavorites } from './helperFunction';

function Storefront({ products }: { products: Product[] }) {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <StorefrontWrapper>
      {products.map(productVal => (
        <IndividualItem
          products={Favorites}
          product={productVal}
          key={productVal.product_id}
        />
      ))}
    </StorefrontWrapper>
  );
}

export default Storefront;
