import type { VariantProps } from "class-variance-authority";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";

interface Props
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export function CopyButton({ onClick, ...props }: Props) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      title="Copy"
      aria-label={!copied ? "Copy" : "Copied"}
      aria-live="polite"
      onClick={async (event) => {
        if (typeof onClick !== "undefined") {
          try {
            onClick(event);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          } catch (error) {
            console.error("Failed to copy to clipboard", error);
          }
        }
      }}
      {...props}
    >
      <span className="relative flex items-center justify-center">
        <CopyIcon
          className={`transition-all duration-200 ${copied ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        />
        <CheckIcon
          className={`absolute transition-all duration-200 ${copied ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
        />
      </span>
    </Button>
  );
}
