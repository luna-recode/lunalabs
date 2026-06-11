import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { verifySecret } from "@/lib/security/verify-secret";

export async function POST(req: NextRequest) {
  const expected = process.env.SANITY_REVALIDATE_SECRET ?? "";
  const provided =
    req.headers.get("x-revalidate-secret") ??
    req.nextUrl.searchParams.get("secret");

  if (!verifySecret(provided, expected)) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body: { _type?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const type = body._type;
  if (type === "caseStudy") {
    revalidateTag("caseStudy", {});
  } else if (type === "blogPost") {
    revalidateTag("blogPost", {});
  } else {
    revalidateTag("caseStudy", {});
    revalidateTag("blogPost", {});
  }

  return NextResponse.json({ revalidated: true, type: type ?? "all" });
}
