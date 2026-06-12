import { defineArrayMember, defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Short name shown on cards and nav, e.g. \"Design & Experience\"",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      description: "URL segment — /services/<slug>. Changing this changes the page URL.",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "number",
      title: "Number",
      description: "Two-digit order label shown as an eyebrow, e.g. \"01\". Also sorts the pillars.",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Card image",
      description: "Shown on the homepage service card. Square works best.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "h1",
      title: "H1 (page headline)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({
      name: "thesis",
      description: "One-line promise shown under the title on the homepage card.",
      type: "text",
      rows: 2,
    }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "bullets",
      title: "What's included",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "problem", type: "text", rows: 4 }),
    defineField({ name: "solution", type: "text", rows: 4 }),
    defineField({
      name: "process",
      title: "Process steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "step", title: "Step name", type: "string" }),
            defineField({ name: "description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "step", subtitle: "description" } },
        }),
      ],
    }),
    defineField({
      name: "outcomes",
      title: "Expected outcomes",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "metric",
              description: "Big symbol or value, e.g. \"↑\", \"↓\", \"0→1\".",
              type: "string",
            }),
            defineField({ name: "label", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "metric" } },
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", type: "string" }),
            defineField({ name: "answer", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
    defineField({
      name: "relatedCategories",
      title: "Related service slugs",
      description: "Slugs of other services to cross-link, e.g. \"design\", \"conversion\".",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "relatedCaseStudies",
      title: "Related case study slugs",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  orderings: [
    {
      title: "Number",
      name: "numberAsc",
      by: [{ field: "number", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "number", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? `${subtitle} · /services` : "/services",
      media,
    }),
  },
});
