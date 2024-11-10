import { Form, useSearchParams } from "@remix-run/react";
import { Input } from "./ui/input";
import { Keyboard } from "./ui/keyboard";

const TIMESTAMP_PARAM_KEY = "timestamp";

export function TimestampToDateForm() {
  const [searchParams] = useSearchParams();
  const timestamp = searchParams.get(TIMESTAMP_PARAM_KEY);

  return (
    <Form>
      <div className="flex flex-col gap-x-2 lg:flex-row lg:items-center">
        <Input
          aria-label="Unix timestamp"
          type="number"
          name="timestamp"
          className="max-w-[80%] rounded-sm py-6 !text-2xl md:max-w-[50%]"
          placeholder="1704067200"
          defaultValue={timestamp ?? ""}
        />
        <Hint />
      </div>
    </Form>
  );
}

function Hint() {
  return (
    <div className="mt-2 lg:mt-0">
      <button type="submit">
        <Keyboard>⏎ Enter</Keyboard>
      </button>
      <span className="ml-1.5 text-sm">to convert</span>
    </div>
  );
}
