import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "client" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "tier",
      type: "string",
      options: {
        list: [
          { title: "Launch", value: "Launch" },
          { title: "Essential", value: "Essential" },
          { title: "Growth", value: "Growth" },
        ],
        layout: "radio",
      },
    }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 4 }),
    defineField({ name: "challenge", type: "text", rows: 4 }),
    defineField({ name: "approach", type: "text", rows: 4 }),
    defineField({ name: "results", type: "text", rows: 4 }),
    defineField({
      name: "deliverables",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "metrics",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "value", type: "string" }),
            defineField({ name: "before", type: "string" }),
            defineField({ name: "after", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "croExplanation",
      title: "CRO Explanation",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "uxExplanation",
      title: "UX Explanation",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "relatedServices",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "beforeImage",
      title: "Before Screenshot",
      description: "Storefront before the redesign — shown in the drag comparison slider",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "afterImage",
      title: "After Screenshot",
      description: "Storefront after the redesign — shown in the drag comparison slider",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "publishedAt", type: "date" }),
  ],
  preview: {
    select: { title: "client", subtitle: "tier" },
  },
});
