"use client";

import { navLinks, siteMeta } from "@/data/content";
import { useActiveSection } from "@/components/layout/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function SideNav() {
  const activeSection = useActiveSection();

  return (
    <aside
      className="fixed inset-y-0 left-0 z-50 hidden w-44 flex-col border-r border-border bg-background/95 backdrop-blur-md lg:flex"
      aria-label="Site navigation"
    >
      <div className="border-b border-border-subtle px-4 py-5">
        <a
          href="#"
          className="group inline-flex items-center gap-2 font-mono text-sm tracking-tight text-foreground"
          aria-label={`${siteMeta.displayName} — home`}
        >
          <span className="border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.08em] transition-colors group-hover:border-accent-highlight group-hover:text-accent-highlight">
            {siteMeta.wordmark}
          </span>
        </a>
        <p className="mt-3 font-mono text-[10px] leading-relaxed text-muted">
          {siteMeta.givenName}
          <br />
          {siteMeta.surnames}
        </p>
      </div>

      <nav className="flex-1 px-3 py-5" aria-label="Primary navigation">
        <ul className="space-y-0.5" role="list">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2.5 px-2 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors duration-200",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  )}
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

      <div className="border-t border-border-subtle px-4 py-4">
        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-light">
          {siteMeta.location}
        </p>
        <p className="mb-4 font-mono text-[9px] text-muted-light">
          {siteMeta.timezone}
        </p>
        <ThemeToggle />
      </div>
    </aside>
  );
}
