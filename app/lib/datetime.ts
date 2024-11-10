export type TimestampUnit = "s" | "ms";

export function currentUnixTimestamp(unit: TimestampUnit = "s") {
  if (unit === "ms") {
    return Date.now();
  }

  return Math.floor(Date.now() / 1000);
}
