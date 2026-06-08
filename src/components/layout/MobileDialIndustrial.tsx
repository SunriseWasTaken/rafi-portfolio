"use client";

import { navLinks } from "@/data/content";
import { useActiveSection } from "@/components/layout/useActiveSection";
import { useMobileDialNav } from "@/components/layout/useMobileDialNav";
import { cn } from "@/lib/utils";

const ARC_RADIUS = 72;
const ARC_CENTER_X = 100;
const ARC_CENTER_Y = 88;

function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number
) {
  const rad = ((angleDeg - 180) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

export function MobileDialIndustrial() {
  const { open, setOpen, toggle } = useMobileDialNav();
  const activeSection = useActiveSection();
  const activeIndex = Math.max(
    0,
    navLinks.findIndex((link) => link.sectionId === activeSection)
  );

  const segmentSpan = 180 / (navLinks.length - 1 || 1);
  const activeAngle = activeIndex * segmentSpan;
  const arcStart = Math.max(0, activeAngle - segmentSpan * 0.45);
  const arcEnd = Math.min(180, activeAngle + segmentSpan * 0.45);
  const displayDegrees = Math.round((activeAngle / 180) * 90);

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-[85] bg-background/40 lg:hidden"
          aria-label="Close navigation dial"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className="fixed bottom-0 left-1/2 z-[90] w-full max-w-xs -translate-x-1/2 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:hidden"
        aria-label="Navigation dial"
      >
        <div
          className={cn(
            "mx-auto mb-3 w-fit transition-all duration-300",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          )}
        >
          <ul className="space-y-0.5 border border-border bg-surface/95 px-2 py-2 backdrop-blur-sm" role="list">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    )}
                    style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
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
        </div>

        <div className="relative mx-auto" style={{ width: 200, height: 96 }}>
          <svg
            viewBox="0 0 200 96"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <path
              d={describeArc(ARC_CENTER_X, ARC_CENTER_Y, ARC_RADIUS, 0, 180)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
            />
            <path
              d={describeArc(ARC_CENTER_X, ARC_CENTER_Y, ARC_RADIUS, arcStart, arcEnd)}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-foreground transition-all duration-500"
            />
            {navLinks.map((_, index) => {
              const tickAngle = index * segmentSpan;
              const inner = polarToCartesian(
                ARC_CENTER_X,
                ARC_CENTER_Y,
                ARC_RADIUS - 6,
                tickAngle
              );
              const outer = polarToCartesian(
                ARC_CENTER_X,
                ARC_CENTER_Y,
                ARC_RADIUS + 2,
                tickAngle
              );
              return (
                <line
                  key={index}
                  x1={inner.x}
                  y1={inner.y}
                  x2={outer.x}
                  y2={outer.y}
                  stroke="currentColor"
                  strokeWidth="1"
                  className={cn(
                    index === activeIndex ? "text-foreground" : "text-border"
                  )}
                />
              );
            })}
          </svg>

          <button
            type="button"
            className={cn(
              "dial-knob absolute left-1/2 top-[calc(100%-12px)] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface transition-transform duration-300",
              open && "scale-105 border-foreground"
            )}
            onClick={toggle}
            aria-expanded={open}
            aria-label={open ? "Close navigation dial" : "Open navigation dial"}
          >
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-light">
              Nav
            </span>
          </button>
        </div>

        <div className="mt-1 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-light">
            Navigation
          </p>
          <p className="font-mono text-sm tabular-nums text-foreground">
            {displayDegrees}°
          </p>
        </div>
      </div>
    </>
  );
}
