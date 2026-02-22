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
    <Card>
      <span>{unixTimestamp}</span>
      <span>{isoTimestamp}</span>
    </Card>
  );
}
