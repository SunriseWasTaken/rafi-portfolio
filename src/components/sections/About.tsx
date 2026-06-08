import { about, siteMeta } from "@/data/content";
import { CvDownloadButton } from "@/components/ui/CvDownloadButton";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="about-heading"
          index="01"
          title="About"
          description="Background, focus areas, and current direction."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <aside className="border-l-2 border-accent-highlight/60 pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light">
              Profile
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteMeta.profileSummary}
            </p>
          </aside>

          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <CvDownloadButton variant="text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
