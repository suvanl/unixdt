import { useEffect, useState } from "react";
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
          <Tooltip>
            <TooltipTrigger
              onClick={() => copyToClipboard(unixTimestamp.toString())}
            >
              <span className="font-mono decoration-muted-foreground decoration-dotted hover:underline">
                {unixTimestamp}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-mono">Unix timestamp</p>
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
