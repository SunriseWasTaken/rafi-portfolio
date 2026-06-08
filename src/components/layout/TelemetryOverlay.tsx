"use client";

import { useEffect, useState } from "react";

function pad(value: number, digits = 4) {
  return value.toString().padStart(digits, "0");
}

function formatDepth(clientX: number, clientY: number) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const max = Math.hypot(cx, cy);
  const dist = Math.hypot(clientX - cx, clientY - cy);
  return (dist / max).toFixed(3);
}

function useCursorCoords() {
  const [coords, setCoords] = useState({ x: 0, y: 0, z: "0.000" });

  useEffect(() => {
    const update = (clientX: number, clientY: number) => {
      setCoords({
        x: clientX,
        y: clientY,
        z: formatDepth(clientX, clientY),
      });
    };

    const onMouse = (e: MouseEvent) => update(e.clientX, e.clientY);

    window.addEventListener("mousemove", onMouse, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return coords;
}

export function TelemetryOverlay() {
  const coords = useCursorCoords();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden lg:block"
      aria-hidden="true"
    >
      <div className="telemetry-crosshair" />
      <div className="telemetry-readout telemetry-readout--tl">
        <span>SYS · ONLINE</span>
        <span>LON · 51.5074° N</span>
        <span>IDX · 013</span>
      </div>
      <div className="telemetry-readout telemetry-readout--tr">
        <span>MODE · PORTFOLIO</span>
        <span>UTC · +00:00</span>
      </div>
      <div className="telemetry-readout telemetry-readout--bl">
        <span>X · {pad(coords.x)}</span>
        <span>Y · {pad(coords.y)}</span>
        <span>Z · {coords.z}</span>
      </div>
      <div className="telemetry-readout telemetry-readout--br">
        <span>NET · STABLE</span>
        <span>SIG · OK</span>
      </div>
    </div>
  );
}
