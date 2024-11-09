import type { MetaFunction } from "@remix-run/node";
import { ThemeToggleButton } from "~/components/theme-toggle-button";

export const meta: MetaFunction = () => {
  return [
    { title: "unixdt" },
    { name: "description", content: "Unix timestamp converter" },
  ];
};

export default function Index() {
  return (
    <main className="container text-3xl">
      <div>unixdt</div>
      <ThemeToggleButton />
    </main>
  );
}
