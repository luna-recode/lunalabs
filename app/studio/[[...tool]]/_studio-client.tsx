"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../../../sanity/schemaTypes";

const config = defineConfig({
  name: "luna-labs",
  title: "Luna Labs",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "mugt2oz4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

export default function StudioClient() {
  return <NextStudio config={config} />;
}
