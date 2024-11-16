import { Form } from "@remix-run/react";
import { Input } from "./ui/input";
import { SubmitButton } from "./submit-button";

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
