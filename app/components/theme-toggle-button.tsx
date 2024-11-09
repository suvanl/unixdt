import { Theme, useTheme } from "remix-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggleButton() {
  const [theme, setTheme] = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      {theme === Theme.DARK ? (
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
