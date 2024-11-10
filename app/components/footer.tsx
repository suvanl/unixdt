export function Footer() {
  const licenseUrl = "https://github.com/suvanl/unixdt/blob/main/LICENSE.md";
  return (
    <footer className="bg-border py-2">
      <div className="container flex flex-col gap-y-1 sm:flex-row sm:justify-between">
        <span className="text-sm text-muted-foreground">
          Copyright (c) 2024 Suvan Leelasena
        </span>
        <a
          href={licenseUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground underline hover:text-link"
        >
          MIT License
        </a>
      </div>
    </footer>
  );
}
