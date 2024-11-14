import { Form } from "@remix-run/react";
import { Input } from "./ui/input";

export function DateToTimestampForm() {
  return (
    <Form>
      <Input
        type="datetime-local"
        name="datetime"
        defaultValue={"2024-01-01T00:00"}
        className="rounded-sm"
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
