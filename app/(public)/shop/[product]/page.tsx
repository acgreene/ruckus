"use client";
// TODO: separate out client components here so page can be server side

import { supabase } from "@/supabase";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Loading } from "@/components/common/Loading";
import { getAllStripePrices, getStripeProduct } from "@/functions/stripe";
import ProductImageViewer from "@/components/shop/product/ProductImageViewer";
import AddToBag from "@/components/shop/bag/AddToBag";

export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const [productExists, setProductExists] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stripeProduct, setStripeProduct] = useState<any>(null);
  const [stripePrice, setStripePrice] = useState<any>(null);
  const [images, setImages] = useState<any>(null);
  const [priceVariant, setPriceVariant] = useState<any>(null);

  async function getSupabaseProduct(): Promise<any> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", params.product)
      .single();

    return data;
  }

  async function getProductImages() {
    const { data, error } = await supabase.storage
      .from("images")
      .list(`products/${params.product}`);

    if (data) {
      const imgArr = [];
      for (let i = 0; i < data.length; i++) {
        const { data: image } = supabase.storage
          .from("images")
          .getPublicUrl(`products/${params.product}/${data[i].name}`);
        imgArr.push(image.publicUrl);
      }
      setImages(imgArr);
    }
  }

  async function handleProductFetch(): Promise<any> {
    const supabaseProduct = await getSupabaseProduct();

    if (!supabaseProduct) {
      return;
    } else {
      const stripeProductRes = await getStripeProduct(
        supabaseProduct.product_id,
      );

      if (!stripeProductRes) {
        return;
      } else {
        // if product is created in supabase products table, and it exists in stripe,
        // then it is ready to be rendered in this page.
        setProductExists(true);
        setStripeProduct(stripeProductRes);

        // const stripePriceRes = await getStripePrice(
        //   stripeProductRes.default_price,
        // );
        const stripePriceRes = await getAllStripePrices(
          supabaseProduct.product_id,
        );

        setPriceVariant(stripeProductRes.default_price);

        setStripePrice(stripePriceRes.data);
      }
    }
  }

  useEffect(() => {
    handleProductFetch().then(() => {
      setIsLoading(false);
    });

    getProductImages().then(() => {});
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    if (productExists) {
      return (
        <div className="flex flex-col space-y-2 pt-12 pb-64">
          <ProductImageViewer images={images} />
          <div className="flex flex-col w-full text-2xl space-y-10">
            <div className="flex flex-row w-full justify-between items-center">
              <span>{stripeProduct.name}</span>
              {stripePrice.map((price: any, index: any) => (
                <span
                  key={index}
                  className={`${price.id === priceVariant ? "block" : "hidden"}`}
                >
                  ${price.unit_amount / 100} USD
                </span>
              ))}
            </div>

            {/* size variant toggle */}
            <div className="flex text-base space-x-1">
              <>
                {stripePrice[0].metadata.size ? (
                  <>
                    {stripePrice.map((price: any, index: number) => (
                      <div
                        key={index}
                        className={`${priceVariant === price.id ? "bg-white text-black" : "bg-black text-white"} border rounded-full cursor-pointer p-1 h-6 w-6 flex justify-center items-center`}
                        onClick={() => setPriceVariant(price.id)}
                      >
                        <span>{price.metadata.size}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <div></div>
                )}
              </>
            </div>

            <div className="w-full flex justify-center items-center">
              <AddToBag stripePriceId={priceVariant} />
            </div>

            <div>
              <span className="text-base">{stripeProduct.description}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pt-16 pb-[325px] flex flex-col space-y-8">
          <span className="text-xl">Product page not found</span>
          <Link href="/shop">
            <button className="p-2 bg-white rounded-full">
              <span className="text-black text-xl">Back to shop</span>
            </button>
          </Link>
        </div>
      );
    }
  }
}
