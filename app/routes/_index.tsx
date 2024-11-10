import type { MetaFunction } from "@remix-run/node";
import { HelpCircleIcon } from "lucide-react";
import { Footer } from "~/components/footer";
import { TopAppBar } from "~/components/top-app-bar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { UnixClock } from "~/components/unix-clock";

export const meta: MetaFunction = () => {
  return [
    { title: "unixdt" },
    { name: "description", content: "Unix timestamp converter" },
  ];
};

export default function Index() {
  return (
    <>
      <TopAppBar />

      <main className="container my-16 space-y-20">
        <section>
          <div className="flex items-center gap-2">
            <h2>Current Unix timestamp</h2>
            <Tooltip>
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

        <section className="grid gap-16 lg:grid-cols-2">
          <section>
            <p className="text-pretty">
              Enter a Unix timestamp (in seconds or milliseconds) to convert to
              a human-readable date
            </p>
          </section>

          <section>
            <p>Select a time and date to convert to a Unix timestamp</p>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
