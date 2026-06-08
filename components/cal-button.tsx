"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type CalButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const CAL_LINK = "lunalabs/revenue-audit";
const CAL_NAMESPACE = "revenue-audit";

export function CalButton({ children, className, onClick }: CalButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </button>
  );
}
