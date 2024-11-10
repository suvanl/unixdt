import {
  formatDate,
  formatRelativeDate,
  formatTimestampUnit,
  getTimestampUnit,
  parseTimestamp,
} from "~/lib/datetime";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { toast } from "sonner";

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

  // todo: make it possible to copy any of the formatted dates on click (show a dotted line + tooltip on hover)
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
                <Tag>{key}</Tag>
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="float-right flex items-center gap-x-4">
      <p className="bg-accent-alt w-fit px-2 py-1 font-semibold text-background">
        {children}
      </p>
    </div>
  );
}
