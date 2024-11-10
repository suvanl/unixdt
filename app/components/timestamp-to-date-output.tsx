import { TimestampUnit } from "~/lib/datetime";

export function TimestampToDateOutput({
  timestamp,
}: {
  timestamp: string | null;
}) {
  if (!timestamp) {
    return;
  }

  const unit = getUnit(timestamp);
  const date = parseTimestamp(Number(timestamp), unit);

  if (!date) {
    return;
  }

  return (
    <div>
      <p>unit: {formatUnit(unit)}</p>
      <p>utc: {formatDate(date, "UTC")}</p>
      <p>your timezone: {formatDate(date)}</p>
    </div>
  );
}

function getUnit(timestamp: string): TimestampUnit {
  const now = Date.now().toString();
  if (timestamp.length >= now.length) {
    return "ms";
  }

  return "s";
}

function formatUnit(unit: TimestampUnit) {
  return unit === "ms" ? "milliseconds" : "seconds";
}

function parseTimestamp(timestamp: number, unit: TimestampUnit): Date | null {
  if (isNaN(timestamp)) {
    return null;
  }

  return new Date(unit === "ms" ? timestamp : timestamp * 1000);
}

function formatDate(date: Date, timeZone?: string) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: timeZone === "UTC" ? "medium" : "long",
    timeZone,
  });

  return formatter.format(date);
}
