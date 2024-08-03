import AddToBag from "@/components/shop/bag/AddToBag";
import RemoveFromBag from "@/components/shop/bag/RemoveFromBag";
import ClearBag from "@/components/shop/bag/ClearBag";

export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  // grab params.product, query db to see if that product exists

  // if product exists in db, return its corresponding data and render it in
  // this product page

  // if product does not exist, redirect to 404 page

  // console.log(params.product);

  return (
    <div className="flex flex-col space-y-2">
      <span>My product: {params.product}</span>
      <AddToBag stripePriceId={params.product} />
      <RemoveFromBag stripePriceId={params.product} />
      <ClearBag />
    </div>
  );
}
