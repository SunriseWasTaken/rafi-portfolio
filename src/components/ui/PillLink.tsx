import { cn } from "@/lib/utils";

interface PillLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function PillLink({ href, children, className }: PillLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-foreground transition-colors hover:border-foreground",
        className
      )}
    >
      {children}
      <span aria-hidden="true" className="text-muted-light">
        ↗
      </span>
    </a>
  );
}
