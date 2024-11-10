import { useEffect, useState } from "react";
import { currentUnixTimestamp } from "~/lib/datetime";

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

  return <div className="my-2 text-6xl">{time}</div>;
}
