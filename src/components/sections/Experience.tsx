import { experience } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

function experienceTypeClass(type: string) {
  if (type === "Engineering") {
    return "border-status-active/60 bg-status-active/15 text-status-active";
  }

  return "border-accent-tag/70 bg-accent-tag/10 text-accent-tag";
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="experience-heading"
          index="03"
          title="Experience"
          description="Education, engineering, and operational roles."
        />

        <div className="relative">
          <div
            className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-[11px]"
            aria-hidden="true"
          />

          <ol className="space-y-0">
            {experience.map((item, index) => (
              <li
                key={item.id}
                className="relative grid gap-4 pb-10 pl-8 md:grid-cols-[148px_1fr] md:gap-8 md:pl-12 md:pb-12"
              >
                <span
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center border border-border bg-background md:left-1 md:h-[23px] md:w-[23px]"
                  aria-hidden="true"
                >
                  <span
                    className={`h-1.5 w-1.5 md:h-2 md:w-2 ${
                      item.type === "Engineering"
                        ? "bg-status-active"
                        : "bg-accent-tag"
                    }`}
                  />
                </span>

                <div className="flex flex-col gap-3 md:gap-4 md:pt-0.5">
                  <time className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-light">
                    {item.period}
                  </time>
                  <Tag className={experienceTypeClass(item.type)}>
                    {item.type}
                  </Tag>
                </div>

                <div>
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {item.description}
                  </p>
                  {"highlights" in item && item.highlights.length > 0 && (
                    <ul
                      className="mt-4 space-y-2 border-l border-border-subtle pl-4"
                      role="list"
                    >
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="text-sm leading-relaxed text-foreground/80 before:mr-2 before:font-mono before:text-[10px] before:text-accent-highlight before:content-['–']"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {index < experience.length - 1 && (
                  <span
                    className="absolute bottom-0 left-8 right-0 h-px bg-border-subtle md:left-12"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
