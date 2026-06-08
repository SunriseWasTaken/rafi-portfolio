import { projects } from "@/data/content";
import { BracketFrame } from "@/components/ui/BracketFrame";
import { PillLink } from "@/components/ui/PillLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpecRow } from "@/components/ui/SpecRow";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-border px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          id="projects-heading"
          index="02"
          title="Projects"
          description="Selected work in healthcare, data systems, and applied engineering."
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <BracketFrame key={project.id}>
              <article className="border border-border bg-surface">
                <div className="flex flex-col gap-4 border-b border-border-subtle p-5 md:flex-row md:items-start md:justify-between md:p-6">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-light">
                        {project.year}
                      </span>
                      <StatusBadge
                        status={project.status}
                        variant={
                          project.status === "Completed" ? "active" : "neutral"
                        }
                      />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  <dl className="mb-6 border border-border-subtle">
                    <SpecRow label="Role" value={project.role} />
                    <SpecRow label="Impact" value={project.impact} />
                    {project.links.length > 0 && (
                      <SpecRow
                        label="Links"
                        value={
                          <div className="flex flex-wrap gap-2">
                            {project.links.map((link) => (
                              <PillLink key={link.href} href={link.href}>
                                {link.label}
                              </PillLink>
                            ))}
                          </div>
                        }
                      />
                    )}
                  </dl>

                  <div className="relative pl-4">
                    <div
                      className="absolute left-0 top-2 h-px w-3 bg-border"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute left-3 top-2 h-8 w-px bg-border"
                      aria-hidden="true"
                    />
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-light">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </BracketFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
