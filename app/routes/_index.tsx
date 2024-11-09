import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/footer";
import { TopAppBar } from "~/components/top-app-bar";

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

      <main className="container">
        <div>Hello world</div>
      </main>

      <Footer />
    </>
  );
}
