import { useEffect, useState } from "react";
import { currentUnixTimestamp } from "~/lib/datetime";
import { Button } from "./ui/button";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

export function UnixClock() {
  const [time, setTime] = useState<number>(currentUnixTimestamp());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentUnixTimestamp());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="my-2 text-6xl">{time}</div>
      <Button
        variant="outline"
        className="text-muted-foreground flex items-center rounded-sm p-2"
        onClick={() => {
          navigator.clipboard
            .writeText(time.toString())
            .then(() => toast.success("Copied to clipboard"))
            .catch(() => toast.error("Failed to copy to clipboard"));
        }}
      >
        <CopyIcon />
        Copy
      </Button>
    </div>
  );
}
