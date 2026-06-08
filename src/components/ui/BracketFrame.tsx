import { cn } from "@/lib/utils";

interface BracketFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function BracketFrame({ children, className }: BracketFrameProps) {
  return <div className={cn("bracket-frame", className)}>{children}</div>;
}
