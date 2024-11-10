import { useEffect, useState } from "react";
import { currentUnixTimestamp } from "~/lib/datetime";
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
      <div className="my-2 text-5xl sm:text-6xl">{time}</div>
      <button
        className="flex items-center gap-2 rounded-sm text-sm text-muted-foreground hover:underline"
        onClick={() => {
          navigator.clipboard
            .writeText(time.toString())
            .then(() => toast.success("Copied to clipboard"))
            .catch(() => toast.error("Failed to copy to clipboard"));
        }}
      >
        <CopyIcon className="size-4" />
        (copy)
      </button>
    </div>
  );
}
