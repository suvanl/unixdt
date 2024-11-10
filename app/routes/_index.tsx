import type { MetaFunction } from "@remix-run/node";
import { HelpCircleIcon } from "lucide-react";
import { Footer } from "~/components/footer";
import { TopAppBar } from "~/components/top-app-bar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

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

      <main className="container my-16">
        <div className="flex items-center gap-2">
          <h2>Current Unix timestamp</h2>
          <Tooltip>
            <TooltipTrigger>
              <HelpCircleIcon className="text-muted-foreground size-4" />
            </TooltipTrigger>
            <TooltipContent className="w-[300px]">
              <p className="text-xs">
                Number of seconds since the Unix epoch (1st January 1970 00:00
                UTC)
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </main>

      <Footer />
    </>
  );
}
