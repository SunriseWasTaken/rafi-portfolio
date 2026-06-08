"use client";

import { siteMeta } from "@/data/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/** Minimal mobile header — navigation lives in the dial overlay. */
export function MobileHeaderBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight text-foreground"
          aria-label={`${siteMeta.displayName} — home`}
        >
          <span className="border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.08em] transition-colors group-hover:border-accent-highlight group-hover:text-accent-highlight">
            {siteMeta.wordmark}
          </span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
