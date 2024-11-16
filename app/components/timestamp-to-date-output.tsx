import {
  formatDate,
  formatRelativeDate,
  formatTimestampUnit,
  getTimestampUnit,
  parseTimestamp,
} from "~/lib/datetime";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { toast } from "sonner";
import { Tag } from "./tag";

export function TimestampToDateOutput({
  timestamp,
}: {
  timestamp: string | null;
}) {
  if (!timestamp) {
    return;
  }

  // Use `Number()` to ensure standard form values are expressed as the raw number
  // e.g., 12e8 -> 1200000000
  const unit = getTimestampUnit(Number(timestamp).toString());
  const date = parseTimestamp(Number(timestamp), unit);

  if (!date) {
    return;
  }

  // todo: show hints/tooltips on abbreviations (e.g., utc and iso)

  const tableData: { key: string; value: string }[] = [
    { key: "unit", value: formatTimestampUnit(unit) },
    {
      key: "utc",
      value: formatDate(date, "UTC"),
    },
    { key: "your timezone", value: formatDate(date) },
    {
      key: "iso 8601",
      value: date.toISOString(),
    },
    { key: "relative", value: formatRelativeDate(date) },
  ];

  return (
    <Table>
      <TableBody>
        {tableData.map(({ key, value }) => (
          <TableRow key={key}>
            <TableCell className="p-0 text-right">
              <div>
                <Tag className="float-right">{key}</Tag>
              </div>
            </TableCell>
            <TableCell>
              <button
                title="Copy to clipboard"
                className="text-left decoration-dotted hover:underline"
                onClick={() => {
                  navigator.clipboard
                    .writeText(value)
                    .then(() => toast.success("Copied to clipboard"))
                    .catch(() => toast.error("Failed to copy to clipboard"));
                }}
              >
                {value}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
