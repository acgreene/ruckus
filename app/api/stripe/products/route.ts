import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(
  req: NextRequest,
): Promise<ReturnType<typeof NextResponse.json>> {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("product_id");

  if (productId !== null) {
    const product = await stripe.products.retrieve(productId);
    if (product) {
      return NextResponse.json(product, { status: 200 });
    } else {
      return NextResponse.json(
        { error: `{Error getting stripe product with id ${productId}` },
        { status: 500 },
      );
    }
  } else {
    const products = await stripe.products.list({
      limit: 3,
    });

    if (products.data) {
      return NextResponse.json(products, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Error getting stripe products" },
        { status: 500 },
      );
    }
  }
}
