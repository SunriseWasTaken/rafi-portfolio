import { skillGroups, spokenLanguages } from "@/data/content";
import { BracketFrame } from "@/components/ui/BracketFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="skills-heading"
          index="04"
          title="Skills"
          description="Technical stack and languages I work with."
        />

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <BracketFrame key={group.id}>
              <div className="border border-border bg-surface p-5 md:p-6">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light">
                  <span className="h-px w-3 bg-border" aria-hidden="true" />
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag className="text-foreground">{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </BracketFrame>
          ))}

          <BracketFrame>
            <div className="border border-border bg-surface p-5 md:p-6">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light">
                <span className="h-px w-3 bg-border" aria-hidden="true" />
                Spoken
              </h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {spokenLanguages.map((language) => (
                  <li key={language.name}>
                    <Tag className="border-accent-tag/40 text-foreground">
                      {language.name}
                      <span className="text-accent-tag">
                        {" "}
                        · {language.fluency}
                      </span>
                    </Tag>
                  </li>
                ))}
              </ul>
            </div>
          </BracketFrame>
        </div>
      </div>
    </section>
  );
}
