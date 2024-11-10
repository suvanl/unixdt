import {
  formatDate,
  formatRelativeDate,
  formatTimestampUnit,
  getTimestampUnit,
  parseTimestamp,
} from "~/lib/datetime";

export function TimestampToDateOutput({
  timestamp,
}: {
  timestamp: string | null;
}) {
  if (!timestamp) {
    return;
  }

  const unit = getTimestampUnit(timestamp);
  const date = parseTimestamp(Number(timestamp), unit);

  if (!date) {
    return;
  }

  return (
    <div>
      <p>unit: {formatTimestampUnit(unit)}</p>
      <p>utc: {formatDate(date, "UTC")}</p>
      <p>your timezone: {formatDate(date)}</p>
      <p>relative: {formatRelativeDate(date)}</p>
    </div>
  );
}
