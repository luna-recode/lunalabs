import {
  caseStudies as studies,
  fetchCaseStudies,
  type CaseStudy as ContentCaseStudy,
} from "@/lib/content/case-studies-data";

export type Metric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: string;
  number: string;
  client: string;
  location: string;
  tier: string;
  tagline: string;
  deliverables: string[];
  metrics?: Metric[];
  image?: string;
  liveUrl?: string;
  placeholder?: boolean;
};

function toWorkStudy(study: ContentCaseStudy, index: number): CaseStudy {
  return {
    id: study.slug,
    number: String(index + 1).padStart(2, "0"),
    client: study.client,
    location: study.location,
    tier: study.tier,
    tagline: study.tagline,
    deliverables: study.deliverables,
    metrics: study.metrics,
    image: study.image,
    liveUrl: study.liveUrl,
    placeholder: study.placeholder,
  };
}

export const caseStudies: CaseStudy[] = studies.map(toWorkStudy);

export async function fetchWorkStudies(): Promise<CaseStudy[]> {
  const data = await fetchCaseStudies();
  return data.map(toWorkStudy);
}
