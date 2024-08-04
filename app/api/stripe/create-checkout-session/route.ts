import { NextResponse } from "next/server"; // eslint-disable-next-line @typescript-eslint/no-var-requires

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(
  req: Request,
  res: Response,
): Promise<
  ReturnType<typeof NextResponse.json> | ReturnType<typeof NextResponse.error>
> {
  const { bagItems } = await req.json();

  console.log(bagItems);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    allow_promotion_codes: true,
    line_items: bagItems.map((item: { priceId: string; quantity: number }) => ({
      price: item.priceId,
      quantity: item.quantity,
    })),
    success_url:
      process.env.NODE_ENV === "development"
        ? `${process.env.NEXT_PUBLIC_LOCAL_HOST_URL}/purchase-complete`
        : `${process.env.NEXT_PUBLIC_PROD_DEPLOYMENT_URL}/purchase-complete`,
  });

  // return NextResponse.redirect(session.url, { status: 303 });
  return NextResponse.json(session.url);
}
