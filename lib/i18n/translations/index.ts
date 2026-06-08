import { en } from "./en";
import { es } from "./es";
import { legalEn } from "./legal-en";
import { legalEs } from "./legal-es";
import type { Locale, Translations } from "../types";

export const translations: Record<Locale, Translations> = {
  en: { ...en, legal: legalEn },
  es: { ...es, legal: legalEs },
};

export { en, es, legalEn, legalEs };
