import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(
  req: NextRequest,
): Promise<ReturnType<typeof NextResponse.json>> {
  const { searchParams } = new URL(req.url);
  const priceId = searchParams.get("price_id");
  const productId = searchParams.get("product_id");

  if (priceId !== null) {
    const price = await stripe.prices.retrieve(priceId);
    if (price) {
      return NextResponse.json(price, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Error getting stripe price" },
        { status: 500 },
      );
    }
  } else if (productId !== null) {
    const prices = await stripe.prices.list({
      product: productId,
    });

    if (prices) {
      return NextResponse.json(prices, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error: `Error getting all stripe prices for product with id ${productId}`,
        },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json(
      { error: `Stripe price object with id ${priceId} not found.` },
      { status: 500 },
    );
  }
}
