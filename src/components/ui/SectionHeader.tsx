import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id: string;
  index: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  id,
  index,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-10 md:mb-14", className)}>
      <div className="mb-3 flex items-center gap-3">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-light"
          aria-hidden="true"
        >
          {index}
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <h2
        id={id}
        className="text-2xl font-medium tracking-tight text-foreground md:text-3xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      )}
    </header>
  );
}
