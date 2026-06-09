import { timingSafeEqual } from "crypto";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const expected = process.env.SANITY_REVALIDATE_SECRET ?? "";

  // Timing-safe comparison prevents brute-force character-by-character attacks.
  // Both buffers must be the same length for timingSafeEqual to work correctly.
  const secretBuf = Buffer.from(secret ?? "");
  const expectedBuf = Buffer.from(expected);
  const valid =
    expected.length > 0 &&
    secretBuf.length === expectedBuf.length &&
    timingSafeEqual(secretBuf, expectedBuf);

  if (!valid) {
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
