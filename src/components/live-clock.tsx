import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/clipboard";
import { currentUnixTimestamp } from "@/lib/datetime";

export function LiveClock() {
  const [unixTimestamp, setUnixTimestamp] = useState(currentUnixTimestamp());
  const [isoTimestamp, setIsoTimestamp] = useState(new Date().toISOString());
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isHoveredRef = useRef(false);
  const isFocusedRef = useRef(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const openTooltip = () => setTooltipOpen(true);
  const closeTooltip = () => {
    if (!isHoveredRef.current && !isFocusedRef.current) setTooltipOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setUnixTimestamp(currentUnixTimestamp());
      setIsoTimestamp(new Date().toISOString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex flex-row items-center gap-16 px-4">
      <div className="flex flex-row items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 dark:bg-emerald-300" />
        <p className="text-muted-foreground">Now</p>
      </div>
      <div className="flex flex-row items-center gap-8">
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
                copyToClipboard(unixTimestamp.toString());
                setCopied(true);
                if (copiedTimeoutRef.current)
                  clearTimeout(copiedTimeoutRef.current);
                copiedTimeoutRef.current = setTimeout(
                  () => setCopied(false),
                  1500,
                );
              }}
            >
              <span className="font-mono decoration-muted-foreground decoration-dotted hover:underline">
                {unixTimestamp}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-mono">
                {copied ? "Copied to clipboard" : "Unix timestamp"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="h-4 w-px bg-border" />
        <span className="font-mono text-muted-foreground decoration-muted-foreground decoration-dotted transition-colors hover:text-primary hover:underline">
          {isoTimestamp}
        </span>
      </div>
    </Card>
  );
}
