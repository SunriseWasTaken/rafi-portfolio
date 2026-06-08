import { cn } from "@/lib/utils";

interface SpecRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export function SpecRow({ label, value, className }: SpecRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,5rem)_1fr] gap-x-4 border-t border-border-subtle py-2.5 first:border-t-0 md:grid-cols-[minmax(0,6rem)_1fr]",
        className
      )}
    >
      <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-light">
        {label}
      </dt>
      <dd className="text-sm text-foreground">{value}</dd>
    </div>
  );
}
