import { cn } from "@/lib/utils";

interface MetaLabelProps {
  label: string;
  value: string;
  className?: string;
}

export function MetaLabel({ label, value, className }: MetaLabelProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light">
        {label}
      </span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
}
