"use client";

import { navLinks } from "@/data/content";
import { useActiveSection } from "@/components/layout/useActiveSection";
import { useMobileDialNav } from "@/components/layout/useMobileDialNav";
import { cn } from "@/lib/utils";

const RING_SIZE = 148;
const KNOB_SIZE = 52;

export function MobileDialHuly() {
  const { open, setOpen, toggle } = useMobileDialNav();
  const activeSection = useActiveSection();
  const activeIndex = Math.max(
    0,
    navLinks.findIndex((link) => link.sectionId === activeSection)
  );
  const segmentAngle = 360 / navLinks.length;

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-[85] bg-background/50 backdrop-blur-[2px] lg:hidden"
          aria-label="Close navigation dial"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className="fixed bottom-5 right-4 z-[90] lg:hidden"
        aria-label="Navigation dial"
      >
        <div
          className={cn(
            "absolute bottom-[calc(100%+0.75rem)] right-0 flex flex-col items-end gap-1.5 transition-all duration-300",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          )}
        >
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] shadow-sm transition-all duration-200",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-surface/95 text-muted backdrop-blur-sm hover:border-accent-highlight hover:text-foreground"
                )}
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={cn(
                    "text-[9px] tabular-nums",
                    isActive ? "text-background/60" : "text-muted-light"
                  )}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="relative" style={{ width: RING_SIZE, height: RING_SIZE }}>
          <svg
            viewBox="0 0 148 148"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <circle
              cx="74"
              cy="74"
              r="58"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
            />
            {navLinks.map((link, index) => {
              const start = index * segmentAngle - 90;
              const end = start + segmentAngle;
              const isActive = index === activeIndex;
              const startRad = (start * Math.PI) / 180;
              const endRad = (end * Math.PI) / 180;
              const inner = 52;
              const outer = 58;
              const x1 = 74 + inner * Math.cos(startRad);
              const y1 = 74 + inner * Math.sin(startRad);
              const x2 = 74 + outer * Math.cos(startRad);
              const y2 = 74 + outer * Math.sin(startRad);
              const x3 = 74 + outer * Math.cos(endRad);
              const y3 = 74 + outer * Math.sin(endRad);
              const x4 = 74 + inner * Math.cos(endRad);
              const y4 = 74 + inner * Math.sin(endRad);
              const largeArc = segmentAngle > 180 ? 1 : 0;

              return (
                <path
                  key={link.sectionId}
                  d={`M ${x1} ${y1} L ${x2} ${y2} A ${outer} ${outer} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${inner} ${inner} 0 ${largeArc} 0 ${x1} ${y1}`}
                  className={cn(
                    "transition-colors duration-300",
                    isActive
                      ? "fill-accent-highlight/35 stroke-accent-highlight/60"
                      : open
                        ? "fill-surface stroke-border"
                        : "fill-transparent stroke-transparent"
                  )}
                />
              );
            })}
          </svg>

          <button
            type="button"
            className={cn(
              "dial-knob absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-surface shadow-lg transition-transform duration-300",
              open && "scale-105"
            )}
            style={{ width: KNOB_SIZE, height: KNOB_SIZE }}
            onClick={toggle}
            aria-expanded={open}
            aria-label={open ? "Close navigation dial" : "Open navigation dial"}
          >
            <span className="flex flex-col gap-[3px]" aria-hidden="true">
              <span className="block h-px w-3.5 bg-foreground/80" />
              <span className="block h-px w-3.5 bg-foreground/80" />
              <span className="block h-px w-3.5 bg-foreground/80" />
            </span>
          </button>
        </div>

        <p className="mt-2 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-muted-light">
          Quick access
        </p>
      </div>
    </>
  );
}
