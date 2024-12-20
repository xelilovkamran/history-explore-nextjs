import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware", request.url);
  return NextResponse.redirect("/");
}

export const config = {
  matcher: "/dashboard*",
};
