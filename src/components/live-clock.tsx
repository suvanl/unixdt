import { useEffect, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { CopyableText } from "@/components/copyable-text";
import { Card } from "@/components/ui/card";
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
    <Card className="flex px-4 sm:flex-row sm:items-center sm:gap-12">
      <div className="flex flex-row items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 dark:bg-emerald-300" />
        <p className="text-muted-foreground">Now</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
        <div className="flex items-center gap-2">
          <CopyableText
            value={unixTimestamp.toString()}
            label="Unix timestamp"
            className="font-mono decoration-muted-foreground decoration-dotted hover:underline"
          />

          <CopyButton
            variant="ghost"
            size="icon-xs"
            title="Copy"
            className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
            onClick={() => copyToClipboard(unixTimestamp.toString())}
          />
        </div>

        <div className="hidden h-4 w-px bg-border sm:visible" />

        <div className="flex items-center gap-2">
          <CopyableText
            value={isoTimestamp}
            label="ISO timestamp"
            className="font-mono text-muted-foreground decoration-muted-foreground decoration-dotted transition-colors hover:text-primary hover:underline"
          />

          <CopyButton
            variant="ghost"
            size="icon-xs"
            title="Copy"
            className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
            onClick={() => copyToClipboard(isoTimestamp)}
          />
        </div>
      </div>
    </Card>
  );
}
