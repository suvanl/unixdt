import type { MetaFunction } from "@vercel/remix";
import { useSearchParams } from "@remix-run/react";
import { HelpCircleIcon } from "lucide-react";
import { DateToTimestampForm } from "~/components/date-to-timestamp-form";
import { Footer } from "~/components/footer";
import { TimestampToDateForm } from "~/components/timestamp-to-date-form";
import { TimestampToDateOutput } from "~/components/timestamp-to-date-output";
import { TopAppBar } from "~/components/top-app-bar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { UnixClock } from "~/components/unix-clock";

const TIMESTAMP_PARAM_KEY = "timestamp";

export const meta: MetaFunction = () => {
  return [
    { title: "unixdt" },
    {
      name: "description",
      content: "Convert Unix timestamps to/from readable dates",
    },
  ];
};

export default function Index() {
  const [searchParams] = useSearchParams();
  const timestampQuery = searchParams.get(TIMESTAMP_PARAM_KEY);

  return (
    <div className="flex min-h-screen flex-col">
      <TopAppBar />

      <main className="container my-16 flex-grow space-y-20 px-2">
        <section>
          <div className="flex items-center gap-2">
            <h2>Current Unix timestamp</h2>
            <Tooltip delayDuration={250}>
              <TooltipTrigger>
                <HelpCircleIcon className="size-4 text-muted-foreground" />
                <span className="sr-only">Help</span>
              </TooltipTrigger>
              <TooltipContent className="w-[300px]">
                <p className="text-xs">
                  Number of seconds since the Unix epoch (1st January 1970 00:00
                  UTC)
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <UnixClock />
        </section>

        <section className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <section className="space-y-8">
            <p className="text-pretty">
              Enter a Unix timestamp (in seconds or milliseconds) to convert to
              a human-readable date
            </p>

            <TimestampToDate timestamp={timestampQuery} />
          </section>

          <section>
            <section className="space-y-8">
              <p>Or select a time and date to convert to a Unix timestamp</p>

              <DateToTimestampForm />
            </section>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function TimestampToDate({ timestamp }: { timestamp: string | null }) {
  return (
    <>
      <TimestampToDateForm timestamp={timestamp} />
      <TimestampToDateOutput timestamp={timestamp} />
    </>
  );
}
