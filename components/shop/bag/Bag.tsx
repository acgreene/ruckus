"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag } from "@/zustand";
import { RiCloseLargeLine } from "react-icons/ri";
import { useShallow } from "zustand/react/shallow";
import RemoveFromBag from "@/components/shop/bag/RemoveFromBag";
import Link from "next/link";
import { getStripePrice, getStripeProduct } from "@/functions/stripe";
import { formatToUrlSlug } from "@/functions";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Loading } from "@/components/common/Loading";
import { useRouter } from "next/navigation";

interface BagProps {
  // Define your prop types here
}

interface BagItem {
  name: string;
  img_src: string;
  variant?: string;
  unitAmount: number;
  slug: string;
  priceId: string;
  productId: string;
  quantity: number;
}

const Bag: React.FC<BagProps> = ({}) => {
  const { products } = ShoppingBag(
    useShallow((state: any) => ({ products: state.products })),
  );
  const removeFromBag = ShoppingBag((state: any) => state.removeProduct);
  const addToBag = ShoppingBag((state: any) => state.addProduct);

  const [fromPath, setFromPath] = useState<any>("");
  const [bagItems, setBagItems] = useState<BagItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  async function handleProductFetch(): Promise<any> {
    const newBagItems: BagItem[] = [];
    for (let i = 0; i < products.length; i++) {
      let priceId = products[i];
      let alreadyInBag = false;

      // if price id is already in newBagItems, just add 1 to the
      // objects quantity and move to next priceId
      for (let j = 0; j < newBagItems.length; j++) {
        if (priceId === newBagItems[j].priceId) {
          newBagItems[j].quantity++;
          alreadyInBag = true;
        }
      }

      if (!alreadyInBag) {
        const price = await getStripePrice(priceId);

        const product = await getStripeProduct(price.product);
        const newBagItem: BagItem = {
          name: product.name,
          img_src: product.images[0],
          variant: price.metadata.size ? price.metadata.size : null,
          unitAmount: price.unit_amount,
          slug: formatToUrlSlug(product.name),
          priceId: price.id,
          productId: product.id,
          quantity: 1,
        };
        newBagItems.push(newBagItem);
      }
    }
    setBagItems(newBagItems);
  }

  function handleChangeQuantity(increment: boolean, priceId: string) {
    //   change from local bagItems state
    setBagItems((prevItems) =>
      prevItems
        .map((item) =>
          item.priceId === priceId
            ? { ...item, quantity: item.quantity + (increment ? 1 : -1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
    //   change from global products state
    if (increment) {
      addToBag(priceId);
    } else {
      removeFromBag(priceId);
    }
  }

  function handleDelete(priceId: string) {
    setBagItems((prevItems) =>
      prevItems.filter((item) => item.priceId !== priceId),
    );
  }

  function calcSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < bagItems.length; i++) {
      subtotal += bagItems[i].unitAmount * bagItems[i].quantity;
    }
    return subtotal / 100;
  }

  const router = useRouter();

  async function postCheckoutSession() {
    setCheckoutLoading(true);

    const postedBagItems = [];
    for (let i = 0; i < bagItems.length; i++) {
      postedBagItems.push({
        priceId: bagItems[i].priceId,
        quantity: bagItems[i].quantity,
      });
    }

    const res = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bagItems: postedBagItems }),
    });

    const stripeSessionUrl = await res.json();

    router.push(stripeSessionUrl as string);
  }

  useEffect(() => {
    const val = localStorage.getItem("toBagRoute");
    setFromPath(val);

    handleProductFetch().then(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div
      className={`absolute flex flex-col justify-start items-center bg-white text-black pt-20 px-4 pb-8 top-0 left-0 w-screen min-h-screen z-50`}
    >
      <Link href={fromPath as string}>
        <div className="text-2xl absolute right-6 top-6 flex flex-col justify-center items-end font-medium">
          <span>Close</span>
          <RiCloseLargeLine />
        </div>
      </Link>

      {isLoaded ? (
        <>
          <div className="w-full space-y-4 pt-6">
            {bagItems.length > 0 ? (
              <>
                {bagItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full border-b-2 border-black pb-4"
                  >
                    <div className="flex flex-row w-full justify-between items-center">
                      <span className="text-2xl">{item.name}</span>
                      <div onClick={() => handleDelete(item.priceId)}>
                        <RemoveFromBag stripePriceId={item.priceId} />
                      </div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center">
                      <div className="flex flex-row space-x-2">
                        <div className="flex h-[80px]">
                          <img
                            src={item.img_src}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {item.variant ? (
                          <span className="text-2xl">{item.variant}</span>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex flex-row text-2xl justify-center items-center space-x-3">
                          <span className="">{item.quantity}</span>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() =>
                                handleChangeQuantity(false, item.priceId)
                              }
                            >
                              <AiOutlineMinus />
                            </button>
                            <button
                              onClick={() =>
                                handleChangeQuantity(true, item.priceId)
                              }
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                        <div>
                          <span className="text-xl">
                            ${(item.unitAmount * item.quantity) / 100} USD
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="w-full flex justify-center items-center pt-8 pb-40">
                <span className="text-3xl">The bag is empty</span>
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-4 justify-center items-center w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <span className="text-2xl">Subtotal</span>
              <span className="text-2xl">${calcSubtotal()} USD</span>
            </div>
            <div className="flex justify-start items-center">
              <span className="text-base">
                Taxes and shipping will be calculated at checkout
              </span>
            </div>
            <div>
              <button
                onClick={postCheckoutSession}
                className={`${checkoutLoading ? "bg-green-500" : "bg-black"} text-white transition duration-300 ease-in-out rounded-full px-14 py-4`}
              >
                {checkoutLoading ? (
                  <Loading />
                ) : (
                  <span className="text-3xl">Checkout</span>
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-[50vh] flex justify-center items-center">
          <div>
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;
