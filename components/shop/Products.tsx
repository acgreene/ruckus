"use client";

import React, { useEffect, useState } from "react";
import { Loading } from "@/components/common/Loading";
import Product from "@/components/shop/Product";
import { getStripeProducts } from "@/functions/stripe";

interface ProductsProps {
  // Define your prop types here
}

const Products: React.FC<ProductsProps> = ({}) => {
  const [products, setProducts] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getStripeProducts().then((p) => {
      setProducts(p?.data);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div className="flex flex-col space-y-20">
          {products.map((product: any, index: number) => (
            <Product product={product} key={index} />
          ))}
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Products;
