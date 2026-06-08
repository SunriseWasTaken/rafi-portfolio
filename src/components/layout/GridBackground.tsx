export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, var(--glow), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent, var(--grid-perspective) 40%),
            repeating-linear-gradient(
              90deg,
              var(--grid-perspective) 0px,
              var(--grid-perspective) 1px,
              transparent 1px,
              transparent 48px
            )
          `,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 100%)",
          transform: "perspective(400px) rotateX(55deg)",
          transformOrigin: "center bottom",
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
    </div>
  );
}
