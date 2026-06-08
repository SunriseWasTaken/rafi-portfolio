import { siteMeta } from "@/data/content";
import { BracketFrame } from "@/components/ui/BracketFrame";
import { CvDownloadButton } from "@/components/ui/CvDownloadButton";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";

const contactLinks = [
  {
    label: "Email",
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/SunriseWasTaken",
    href: siteMeta.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tanvirhossainp",
    href: siteMeta.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="contact-heading"
          index="05"
          title="Contact"
          description="Open to collaborations, internships, and technical conversations."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <BracketFrame>
            <div className="border border-border bg-surface/80 p-5 backdrop-blur-sm md:p-6">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light">
                Channels
              </p>
              <ul className="space-y-4" role="list">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group block rounded-full border border-transparent px-2 py-1 transition-colors hover:border-border-subtle"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-light">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-foreground transition-colors group-hover:text-accent-highlight md:text-base">
                        {link.value}
                        {link.external && (
                          <span
                            className="ml-1 text-muted-light"
                            aria-hidden="true"
                          >
                            ↗
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border-subtle pt-6">
                <CvDownloadButton variant="secondary" />
              </div>
            </div>
          </BracketFrame>

          <div className="border border-accent-highlight/25 border-dashed bg-accent-highlight/8 p-5 md:p-6">
            <p className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-highlight">
              <span className="h-px w-3 bg-accent-highlight/50" aria-hidden="true" />
              System Info
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <MetaLabel label="Location" value={siteMeta.location} />
              <MetaLabel label="Status" value={siteMeta.status} />
              <MetaLabel label="Availability" value={siteMeta.availability} />
              <MetaLabel label="Timezone" value={siteMeta.timezone} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
