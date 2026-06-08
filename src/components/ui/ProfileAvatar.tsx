import Image from "next/image";
import { siteMeta } from "@/data/content";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { className: "h-12 w-12", pixels: 96 },
  md: { className: "h-16 w-16", pixels: 128 },
  lg: { className: "h-24 w-24", pixels: 192 },
  xl: { className: "h-32 w-32", pixels: 256 },
} as const;

interface ProfileAvatarProps {
  size?: keyof typeof sizeMap;
  className?: string;
  priority?: boolean;
}

export function ProfileAvatar({
  size = "md",
  className,
  priority = false,
}: ProfileAvatarProps) {
  const dimensions = sizeMap[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border border-border bg-surface",
        dimensions.className,
        className
      )}
    >
      <Image
        src={siteMeta.profileImage}
        alt={siteMeta.profileImageAlt}
        width={dimensions.pixels}
        height={dimensions.pixels}
        className="h-full w-full object-cover object-[center_10%]"
        priority={priority}
        sizes={`${dimensions.pixels}px`}
      />
    </div>
  );
}
