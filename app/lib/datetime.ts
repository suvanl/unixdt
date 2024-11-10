import { formatDistance } from "date-fns";
import { enGB } from "date-fns/locale";

type TimestampUnit = "s" | "ms";

export function currentUnixTimestamp(unit: TimestampUnit = "s") {
  if (unit === "ms") {
    return Date.now();
  }

  return Math.floor(Date.now() / 1000);
}

export function getTimestampUnit(timestamp: string): TimestampUnit {
  const now = Date.now().toString();
  if (timestamp.length >= now.length) {
    return "ms";
  }

  return "s";
}

export function formatTimestampUnit(unit: TimestampUnit) {
  return unit === "ms" ? "milliseconds" : "seconds";
}

export function parseTimestamp(
  timestamp: number,
  unit: TimestampUnit,
): Date | null {
  if (isNaN(timestamp) || timestamp > Number.MAX_SAFE_INTEGER) {
    return null;
  }

  return new Date(unit === "ms" ? timestamp : timestamp * 1000);
}

export function formatDate(date: Date, timeZone?: string) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: timeZone === "UTC" ? "medium" : "long",
    timeZone,
  });

  return formatter.format(date);
}

export function formatRelativeDate(date: Date) {
  return formatDistance(date, Date.now(), { locale: enGB, addSuffix: true });
}
