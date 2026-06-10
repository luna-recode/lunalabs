import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "mugt2oz4",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const SLUG_MAP: Record<string, string> = {
  "conversion-websites": "build",
  "website-redesign": "design",
  "landing-page-design": "design",
  "ecommerce-optimization": "conversion",
};

function mapServices(services: string[]): string[] {
  const mapped = services.map((s) => SLUG_MAP[s] ?? s);
  return [...new Set(mapped)];
}

async function run() {
  const docs = await client.fetch<
    Array<{
      _id: string;
      _type: string;
      slug: string;
      client?: string;
      title?: string;
      relatedServices: string[];
    }>
  >(
    `*[_type in ["caseStudy", "blogPost"] && defined(relatedServices)]{
      _id, _type, "slug": slug.current, client, title, relatedServices
    }`
  );

  console.log(`Found ${docs.length} documents to migrate.\n`);

  for (const doc of docs) {
    const before = doc.relatedServices;
    const after = mapServices(before);
    const label = doc.client ?? doc.title ?? doc.slug;

    console.log(`[${doc._type}] ${label} (${doc.slug})`);
    console.log(`  before: ${JSON.stringify(before)}`);
    console.log(`  after:  ${JSON.stringify(after)}`);

    await client
      .patch(doc._id)
      .set({ relatedServices: after })
      .commit({ autoGenerateArrayKeys: false });

    console.log(`  ✓ patched`);

    if (doc._type === "caseStudy") {
      // publish by discarding draft (the published doc already exists; patching the published ID directly)
      // Actually we patched the published doc directly above; check if a draft exists
      const draftId = `drafts.${doc._id}`;
      const draft = await client.fetch(`*[_id == $id][0]`, { id: draftId });
      if (draft) {
        await client.delete(draftId);
        console.log(`  ✓ draft deleted (published is authoritative)`);
      }
    }

    console.log();
  }

  console.log("Migration complete. Verifying...\n");

  const verify = await client.fetch(
    `*[_type == "caseStudy"]{ client, "slug": slug.current, relatedServices }`
  );
  console.log("Case studies after migration:");
  for (const doc of verify) {
    console.log(`  ${doc.client} (${doc.slug}): ${JSON.stringify(doc.relatedServices)}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
