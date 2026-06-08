export const CONTENT_PL = "lg:pl-[calc(11rem+1.75rem)]";

export function getScrollOffset() {
  if (typeof window === "undefined") return -16;
  return window.matchMedia("(min-width: 1024px)").matches ? -16 : -72;
}
