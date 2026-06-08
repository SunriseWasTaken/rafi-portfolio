import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
        className ?? "border-border-subtle bg-surface text-muted"
      )}
    >
      {children}
    </span>
  );
}
