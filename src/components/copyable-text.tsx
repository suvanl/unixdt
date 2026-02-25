import { useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/clipboard";

interface CopyableTextProps {
  value: string;
  label: string;
  className?: string;
}

export function CopyableText({ value, label, className }: CopyableTextProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isHoveredRef = useRef(false);
  const isFocusedRef = useRef(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const openTooltip = () => setTooltipOpen(true);
  const closeTooltip = () => {
    if (!isHoveredRef.current && !isFocusedRef.current) setTooltipOpen(false);
  };

  return (
    <TooltipProvider>
      <Tooltip
        open={tooltipOpen}
        onOpenChange={(open) => {
          if (open || (!isHoveredRef.current && !isFocusedRef.current))
            setTooltipOpen(open);
        }}
      >
        <TooltipTrigger
          onMouseEnter={() => {
            isHoveredRef.current = true;
            openTooltip();
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            closeTooltip();
          }}
          onFocus={() => {
            isFocusedRef.current = true;
            openTooltip();
          }}
          onBlur={() => {
            isFocusedRef.current = false;
            closeTooltip();
          }}
          onClick={() => {
            copyToClipboard(value);
            setCopied(true);
            if (copiedTimeoutRef.current) {
              clearTimeout(copiedTimeoutRef.current);
            }
            copiedTimeoutRef.current = setTimeout(() => setCopied(false), 1500);
          }}
        >
          <span className={className}>{value}</span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-mono">{copied ? "Copied to clipboard" : label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
