import { cn } from "~/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <div className={cn("flex items-center gap-x-4", className)}>
      <p className="w-fit bg-accent-alt px-2 py-1 font-semibold text-background">
        {children}
      </p>
    </div>
  );
}
