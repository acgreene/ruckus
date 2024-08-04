"use client";
// TODO: separate out client components here so page can be server side

import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Loading } from "@/components/common/Loading";
import { getStripePrice, getStripeProduct } from "@/functions/stripe";
import ProductImageViewer from "@/components/shop/product/ProductImageViewer";

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

        const stripePriceRes = await getStripePrice(
          stripeProductRes.default_price,
        );
        setStripePrice(stripePriceRes);
      }
    }
  }

  useEffect(() => {
    handleProductFetch().then(() => {
      setIsLoading(false);
    });

    getProductImages().then(() => {});
  }, []);

  // console.log("PRODUCT:", stripeProduct);
  // console.log("PRICE:", stripePrice);
  // console.log("IMAGES:", images);

  if (isLoading) {
    return <Loading />;
  } else {
    if (productExists) {
      return (
        <div className="flex flex-col space-y-2 pt-12 pb-12">
          <div>
            <ProductImageViewer images={images} />
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
