/**
 * https://docs.stripe.com/api/products/retrieve?lang=node
 * Fetches the stripe product with the corresponding id
 * @param productId the productId of the stripe product
 */
export async function getStripeProduct(productId: string): Promise<any> {
  const response = await fetch(`/api/stripe/products?product_id=${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

/**
 * https://docs.stripe.com/api/products/object?lang=node
 * Fetches all stripe products in the product catalog.
 */
export async function getStripeProducts(): Promise<any> {
  const response = await fetch("/api/stripe/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

/**
 * https://docs.stripe.com/api/prices/object?lang=node
 * Fetches the stripe price object associated with the following priceId.
 * @param priceId the priceId of the stripe price.
 */
export async function getStripePrice(priceId: string): Promise<any> {
  const response = await fetch(`/api/stripe/prices?price_id=${priceId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
