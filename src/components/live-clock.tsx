import { useEffect, useState } from "react";
import { currentUnixTimestamp } from "@/lib/datetime";
import { Card } from "./ui/card";

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
      <div className="flex flex-row gap-8">
        <span className="font-mono">{unixTimestamp}</span>
        <span className="font-mono text-muted-foreground transition-colors hover:text-primary">
          {isoTimestamp}
        </span>
      </div>
    </Card>
  );
}
