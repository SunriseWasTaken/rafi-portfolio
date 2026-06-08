import { siteMeta } from "@/data/content";
import { BracketFrame } from "@/components/ui/BracketFrame";
import { CvDownloadButton } from "@/components/ui/CvDownloadButton";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function Hero() {
  return (
    <section
      className="relative border-b border-border px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl">
        <BracketFrame className="mb-10 border border-border-subtle bg-surface/80 p-4 backdrop-blur-sm md:p-5">
          <div className="flex flex-wrap gap-6 md:gap-10">
            <MetaLabel label="Status" value={siteMeta.status} />
            <MetaLabel label="Location" value={siteMeta.location} />
            <MetaLabel label="Availability" value={siteMeta.availability} />
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light">
                System
              </span>
              <StatusBadge status={siteMeta.systemStatus} variant="active" />
            </div>
          </div>
        </BracketFrame>

        <div className="mb-4 flex items-center gap-3">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-highlight"
            aria-hidden="true"
          >
            01
          </span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-light">
          Portfolio / {siteMeta.displayName}
        </p>

        <h1
          id="hero-heading"
          className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-7xl md:leading-[1.05]"
        >
          <span className="block">{siteMeta.givenName}</span>
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="block">{siteMeta.surnames}</span>
            <span className="font-mono text-sm font-normal tracking-normal text-muted-light md:text-base">
              ({siteMeta.nickname})
            </span>
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
          {siteMeta.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-foreground bg-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-background transition-colors hover:bg-accent-muted sm:w-auto"
          >
            View Projects
            <span aria-hidden="true">→</span>
          </a>
          <CvDownloadButton
            variant="primary"
            className="min-h-11 w-full justify-center sm:w-auto"
          />
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.08em] text-foreground transition-colors hover:border-accent-highlight sm:w-auto"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
