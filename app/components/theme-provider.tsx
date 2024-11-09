import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Despite the name, next-themes is now React framework agnostic
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
