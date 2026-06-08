import { siteMeta } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-light">
            © {year} {siteMeta.displayName}
          </p>
          <p className="font-mono text-[10px] text-muted-light">
            AKA {siteMeta.nickname}
          </p>
        </div>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-light">
            London, UK
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-light">
            Index {siteMeta.footerIndex} · Sys v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
