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
            className="px-[22px] py-4 text-left font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted"
          >
            {t.roiTable.perMonth}
          </th>
          <th
            scope="col"
            className="px-[22px] py-4 text-right font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted"
          >
            {t.roiTable.now}
          </th>
          <th
            scope="col"
            className="px-[22px] py-4 text-right font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted"
          >
            {t.roiTable.after}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className={`border-b ${borderClass} text-sm ${rowTextClass}`}>
            <th scope="row" className="px-[22px] py-4 text-left font-normal">
              {row.label}
            </th>
            <td className="px-[22px] py-4 text-right text-muted">{row.now}</td>
            <td className="px-[22px] py-4 text-right font-medium text-accent">
              <span className="sr-only">{t.common.improved}</span>
              {row.after}
            </td>
          </tr>
        ))}
        <tr className={`bg-accent/[0.06] font-serif text-[17px] ${rowTextClass}`}>
          <th scope="row" className="px-[22px] py-4 text-left font-normal">
            {t.roiTable.monthlyRevenue}
          </th>
          <td className="px-[22px] py-4 text-right text-muted">{totalNow}</td>
          <td className="px-[22px] py-4 text-right text-[19px] font-medium text-accent">
            <span className="sr-only">{t.common.improved}</span>
            {totalAfter}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
