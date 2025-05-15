import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const locale = searchParams.get("locale") || "en";

  if (token !== process.env.PREVIEW_SECRET) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  draftMode().enable();
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}