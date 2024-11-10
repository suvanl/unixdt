import { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export function Keyboard({
  children,
  className,
}: { children: React.ReactNode } & Pick<
  HTMLAttributes<HTMLElement>,
  "className"
>) {
  return (
    <kbd
      className={cn(
        "bg-kbd text-kbd-foreground rounded-sm px-2 py-0.5 text-xs font-semibold transition-colors hover:bg-foreground",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
