import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// Sanity sends a POST with the document body.
// We validate the shared secret and flush the right cache tag.
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
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
    // Unknown type — revalidate everything just in case
    revalidateTag("caseStudy", {});
    revalidateTag("blogPost", {});
  }

  return NextResponse.json({ revalidated: true, type: type ?? "all" });
}
