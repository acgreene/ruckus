import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatToUrlSlug } from "@/functions";
import { getStripePrice } from "@/functions/stripe";

interface ProductProps {
  product: any;
  hideName?: boolean;
  hidePrice?: boolean;
}

const Product: React.FC<ProductProps> = ({ product, hideName, hidePrice }) => {
  const [price, setPrice] = useState<any>(null);

  useEffect(() => {
    getStripePrice(product.default_price).then((p) => {
      setPrice(p);
    });
  }, []);

  return (
    <Link href={`/shop/${formatToUrlSlug(product?.name)}`}>
      <div>
        <div className="flex h-[280px] xs:h-[400px] sm:w-[500px]">
          <img
            src={product?.images[0]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-2xl flex flex-col sm:text-4xl">
          {hideName ? <></> : <span>{product?.name}</span>}
          {hidePrice ? <></> : <span>${price?.unit_amount / 100} USD</span>}
        </div>
      </div>
    </Link>
  );
};

export default Product;
