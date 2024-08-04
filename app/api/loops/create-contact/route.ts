import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(
  req: NextRequest,
): Promise<
  ReturnType<typeof NextResponse.json> | ReturnType<typeof NextResponse.error>
> {
  const { email } = await req.json();

  // create user in loops
  const request = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_LOOPS_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });
  const response = await request.json();

  if (response.success === true) {
    return NextResponse.json({ success: response.success });
  } else {
    return NextResponse.error();
  }
}
