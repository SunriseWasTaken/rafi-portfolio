import { siteMeta } from "@/data/content";
import { cn } from "@/lib/utils";

interface CvDownloadButtonProps {
  variant?: "primary" | "secondary" | "text";
  className?: string;
}

export function CvDownloadButton({
  variant = "secondary",
  className,
}: CvDownloadButtonProps) {
  return (
    <a
      href={siteMeta.cvPath}
      download={siteMeta.cvFilename}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors",
        variant === "primary" &&
          "border border-accent-highlight bg-accent-highlight/10 px-5 py-2.5 text-accent-highlight hover:bg-accent-highlight/20",
        variant === "secondary" &&
          "rounded-full border border-border px-5 py-2.5 text-foreground hover:border-accent-highlight hover:text-accent-highlight",
        variant === "text" &&
          "text-muted hover:text-accent-highlight underline-offset-4 hover:underline",
        className
      )}
    >
      Download CV
      <span aria-hidden="true">↓</span>
    </a>
  );
}
