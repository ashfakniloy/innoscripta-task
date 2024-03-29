"use client";

import { format } from "date-fns-tz";

export const ClientFormattedDate = ({ date }: { date: string }) => {
  const clientTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formattedDate = format(new Date(date), "MMMM dd yyyy, p", {
    timeZone: clientTimezone,
  });

  return <>{clientTimezone ? formattedDate : ""}</>;
};
