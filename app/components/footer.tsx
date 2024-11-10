export function Footer() {
  const licenseUrl = "https://github.com/suvanl/unixdt/blob/main/LICENSE.md";
  return (
    <footer className="bg-border py-2">
      <div className="container flex flex-col gap-y-1 sm:flex-row sm:justify-between">
        <span className="text-muted-foreground text-sm">
          Copyright (c) Suvan Leelasena 2024
        </span>
        <a
          href={licenseUrl}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-link text-sm underline"
        >
          MIT License
        </a>
      </div>
    </footer>
  );
}
