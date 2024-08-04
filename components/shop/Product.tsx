import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatToUrlSlug } from "@/functions";
import { getStripePrice } from "@/functions/stripe";

interface ProductProps {
  product: any;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [price, setPrice] = useState<any>(null);

  useEffect(() => {
    getStripePrice(product.default_price).then((p) => {
      setPrice(p);
    });
  }, []);

  return (
    <Link href={`/shop/${formatToUrlSlug(product?.name)}`}>
      <div>
        <div className="flex h-[280px]">
          <img
            src={product?.images[0]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-2xl flex flex-col">
          <span>{product?.name}</span>
          <span>${price?.unit_amount / 100} USD</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
