export function currentUnixTimestamp(unit: "s" | "ms" = "s") {
  if (unit === "ms") {
    return Date.now();
  }

  return Math.floor(Date.now() / 1000);
}
