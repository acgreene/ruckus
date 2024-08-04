"use client";

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getStripeProducts } from "@/functions/stripe";
import Product from "@/components/shop/Product";
import { Loading } from "@/components/common/Loading";

interface ProductCarouselProps {
  // Define your prop types here
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [products, setProducts] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getStripeProducts().then((p) => {
      setProducts(p);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="w-full pb-48">
      {isLoaded ? (
        <Carousel
          responsive={responsive}
          swipeable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {products.map((product: any, index: number) => (
            <div className="">
              <Product
                product={product}
                key={index}
                hideName={true}
                hidePrice={true}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
