import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: "active" | "neutral" | "planned";
  className?: string;
}

export function StatusBadge({
  status,
  variant = "neutral",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em]",
        variant === "active" && "text-status-active",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          variant === "active" && "bg-status-active shadow-[0_0_6px_var(--status-active)]",
          variant === "neutral" && "bg-muted-light",
          variant === "planned" && "border border-muted-light bg-transparent"
        )}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
