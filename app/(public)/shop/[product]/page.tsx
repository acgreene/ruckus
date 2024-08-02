export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  // grab params.product, query db to see if that product exists

  // if product exists in db, return its corresponding data and render it in
  // this product page

  // if product does not exist, redirect to 404 page

  console.log(params.product);
  return (
    <div>
      <span>My product: {params.product}</span>
    </div>
  );
}
