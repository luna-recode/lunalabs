"use client";

import { useTranslations } from "@/lib/i18n/context";

type RoiRow = {
  label: string;
  now: string;
  after: string;
};

type RoiTableProps = {
  rows: RoiRow[];
  totalNow: string;
  totalAfter: string;
  variant?: "default" | "surface";
};

export function RoiTable({
  rows,
  totalNow,
  totalAfter,
  variant = "default",
}: RoiTableProps) {
  const t = useTranslations();
  const borderClass = variant === "surface" ? "border-line-d" : "border-line";
  const wrapperClass =
    variant === "surface"
      ? "overflow-hidden rounded-lg border border-line-d bg-card"
      : "overflow-hidden rounded-lg border border-line bg-bone/[0.02]";
  const rowTextClass = variant === "surface" ? "text-bone" : "";

  return (
    <table className={`w-full ${wrapperClass} border-collapse`}>
      <caption className="sr-only">{t.roiTable.caption}</caption>
      <thead>
        <tr className={`border-b ${borderClass}`}>
          <th
            scope="col"
            className="px-3 py-3 text-left font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:px-[22px] sm:py-4 sm:text-[10.5px] sm:tracking-[0.14em]"
          >
            {t.roiTable.perMonth}
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:px-[22px] sm:py-4 sm:text-[10.5px] sm:tracking-[0.14em]"
          >
            {t.roiTable.now}
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:px-[22px] sm:py-4 sm:text-[10.5px] sm:tracking-[0.14em]"
          >
            {t.roiTable.after}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className={`border-b ${borderClass} text-sm ${rowTextClass}`}>
            <th scope="row" className="px-3 py-3 text-left font-normal sm:px-[22px] sm:py-4">
              {row.label}
            </th>
            <td className="px-3 py-3 text-right text-muted sm:px-[22px] sm:py-4">{row.now}</td>
            <td className="px-3 py-3 text-right font-medium text-accent sm:px-[22px] sm:py-4">
              <span className="sr-only">{t.common.improved}</span>
              {row.after}
            </td>
          </tr>
        ))}
        <tr className={`bg-accent/[0.06] font-serif text-[17px] ${rowTextClass}`}>
          <th scope="row" className="px-3 py-3 text-left font-normal sm:px-[22px] sm:py-4">
            {t.roiTable.monthlyRevenue}
          </th>
          <td className="px-3 py-3 text-right text-muted sm:px-[22px] sm:py-4">{totalNow}</td>
          <td className="px-3 py-3 text-right text-[17px] font-medium text-accent sm:px-[22px] sm:py-4 sm:text-[19px]">
            <span className="sr-only">{t.common.improved}</span>
            {totalAfter}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
