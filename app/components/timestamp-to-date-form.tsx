import { Form } from "@remix-run/react";
import { Input } from "./ui/input";
import { SubmitButton } from "./submit-button";

export function TimestampToDateForm({
  timestamp,
}: {
  timestamp: string | null;
}) {
  return (
    <Form className="group flex flex-col gap-x-2 lg:flex-row lg:items-center">
      <Input
        aria-label="Unix timestamp"
        type="number"
        name="timestamp"
        className="max-w-[80%] rounded-sm py-6 !text-2xl md:max-w-[50%]"
        placeholder="1704067200"
        defaultValue={timestamp ?? ""}
      />
      <SubmitButton className="hidden group-focus-within:block" />
    </Form>
  );
}
