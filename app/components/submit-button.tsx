import { HTMLAttributes } from "react";
import { Keyboard } from "./ui/keyboard";
import { cn } from "~/lib/utils";

export function SubmitButton({
  className,
}: Pick<HTMLAttributes<HTMLDivElement>, "className">) {
  return (
    <div className={cn("mt-2 lg:mt-0", className)}>
      <button type="submit">
        <Keyboard>⏎ Enter</Keyboard>
      </button>
      <span className="ml-1.5 text-sm">to convert</span>
    </div>
  );
}
