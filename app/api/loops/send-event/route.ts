import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(
  req: NextRequest,
): Promise<
  ReturnType<typeof NextResponse.json> | ReturnType<typeof NextResponse.error>
> {
  const { email, eventName } = await req.json();

  // trigger loops event
  const request = await fetch("https://app.loops.so/api/v1/events/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_LOOPS_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, eventName }),
  });
  const response = await request.json();

  if (response.success === true) {
    return NextResponse.json({ success: response.success });
  } else {
    return NextResponse.error();
  }
}
