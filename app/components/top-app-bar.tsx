import { ThemeToggleButton } from "./theme-toggle-button";

export function TopAppBar() {
  return (
    <nav className="bg-border py-2">
      <div className="container flex items-center justify-between">
        <div className="text-xl font-semibold">unixdt</div>
        <ThemeToggleButton />
      </div>
    </nav>
  );
}
