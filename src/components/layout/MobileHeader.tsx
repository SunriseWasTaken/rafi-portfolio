"use client";

import { useEffect, useState } from "react";
import { navLinks, siteMeta } from "@/data/content";
import { useActiveSection } from "@/components/layout/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight text-foreground"
          aria-label={`${siteMeta.displayName} — home`}
          onClick={() => setOpen(false)}
        >
          <span className="border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.08em] transition-colors group-hover:border-accent-highlight group-hover:text-accent-highlight">
            {siteMeta.wordmark}
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center border border-border"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  "block h-px w-3.5 bg-foreground transition-transform duration-200",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-3.5 bg-foreground transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-3.5 bg-foreground transition-transform duration-200",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid border-t border-border transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav
          id="mobile-nav"
          className="overflow-hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-0.5 px-3 py-3" role="list">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2.5 px-2 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={cn(
                        "w-4 shrink-0 text-[9px] tabular-nums",
                        isActive ? "text-background/60" : "text-muted-light"
                      )}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
