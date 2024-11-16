import { Form } from "@remix-run/react";
import { Input } from "./ui/input";
import { SubmitButton } from "./submit-button";
import { getUnixTimestamp } from "~/lib/datetime";
import { Tag } from "./tag";
import { toast } from "sonner";

export function DateToTimestamp({ isoDate }: { isoDate: string | null }) {
  return (
    <>
      <DateToTimestampForm isoDate={isoDate} />
      <DateToTimestampOutput isoDate={isoDate} />
    </>
  );
}

export function DateToTimestampForm({ isoDate }: { isoDate: string | null }) {
  return (
    <Form className="group flex items-center gap-x-4">
      <Input
        type="datetime-local"
        name="datetime"
        defaultValue={isoDate ?? "2024-01-01T00:00"}
        className="max-w-fit rounded-sm !text-lg"
      />
      <SubmitButton className="hidden group-focus-within:block" />
    </Form>
  );
}

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
