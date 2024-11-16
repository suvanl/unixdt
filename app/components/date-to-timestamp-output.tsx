import { getUnixTimestamp } from "~/lib/datetime";
import { Tag } from "./tag";
import { toast } from "sonner";

export function DateToTimestampOutput({ isoDate }: { isoDate: string | null }) {
  if (!isoDate) {
    return;
  }

  const date = new Date(isoDate);
  if (date.toString() === "Invalid Date") {
    return;
  }

  const timestamp = getUnixTimestamp(date).toString();

  return (
    <div className="flex items-center gap-x-4">
      <Tag>timestamp</Tag>
      <button
        className="decoration-dotted hover:underline"
        onClick={() => {
          navigator.clipboard
            .writeText(timestamp)
            .then(() => toast.success("Copied to clipboard"))
            .catch(() => toast.error("Failed to copy to clipboard"));
        }}
      >
        {timestamp}
      </button>
    </div>
  );
}
